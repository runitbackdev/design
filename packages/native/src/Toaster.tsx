import { CircleAlert, CircleCheck, CircleX, Info } from "lucide-react-native";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Pressable,
  View,
  type ViewProps,
} from "react-native";
import { cn } from "./cn";
import { useThemeColor } from "./shared";
import { Toast } from "./Toast";

// Sonner's architecture: a singleton Observer publishes the toast list to
// subscribers; toast() creates-or-updates by id, which is what lets
// toast.promise morph a loading toast into its outcome in place.

export type ToastType = "default" | "success" | "error" | "warning" | "info" | "loading";

export type ToastData = {
  id?: number;
  title?: string;
  description?: string;
  type?: ToastType;
  duration?: number;
  onDismiss?: (id: number) => void;
  onAutoClose?: (id: number) => void;
};

type ToastT = ToastData & { id: number; type: ToastType; dismiss?: boolean };

type Subscriber = (toasts: ToastT[]) => void;

let toastCounter = 0;

class Observer {
  subscribers = new Set<Subscriber>();
  toasts: ToastT[] = [];

  subscribe(subscriber: Subscriber) {
    this.subscribers.add(subscriber);
    subscriber([...this.toasts]);
    return () => {
      this.subscribers.delete(subscriber);
    };
  }

  publish() {
    for (const subscriber of this.subscribers) subscriber([...this.toasts]);
  }

  create(data: ToastData): number {
    const id = data.id ?? ++toastCounter;
    const existing = this.toasts.find((t) => t.id === id);
    if (existing) {
      this.toasts = this.toasts.map((t) =>
        t.id === id ? { ...t, ...data, id, type: data.type ?? "default", dismiss: false } : t,
      );
    } else {
      this.toasts = [...this.toasts, { type: "default", ...data, id }];
    }
    this.publish();
    return id;
  }

  dismiss(id?: number) {
    this.toasts = this.toasts.map((t) =>
      id === undefined || t.id === id ? { ...t, dismiss: true } : t,
    );
    this.publish();
  }

  remove(id: number) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
    this.publish();
  }
}

export const ToastState = new Observer();

type Message = string | ToastData;

function normalize(message: Message, data?: ToastData, type?: ToastType): ToastData {
  const base = typeof message === "string" ? { title: message } : message;
  return { ...base, ...data, type: type ?? data?.type ?? base.type };
}

type PromiseMessages<T> = {
  loading: string;
  success: string | ((value: T) => string);
  error: string | ((error: unknown) => string);
};

export const toast = Object.assign(
  (message: Message, data?: ToastData) => ToastState.create(normalize(message, data)),
  {
    success: (message: Message, data?: ToastData) =>
      ToastState.create(normalize(message, data, "success")),
    error: (message: Message, data?: ToastData) =>
      ToastState.create(normalize(message, data, "error")),
    warning: (message: Message, data?: ToastData) =>
      ToastState.create(normalize(message, data, "warning")),
    info: (message: Message, data?: ToastData) =>
      ToastState.create(normalize(message, data, "info")),
    loading: (message: Message, data?: ToastData) =>
      ToastState.create(normalize(message, data, "loading")),
    dismiss: (id?: number) => ToastState.dismiss(id),
    promise: <T,>(promise: Promise<T>, messages: PromiseMessages<T>): Promise<T> => {
      const id = ToastState.create({ title: messages.loading, type: "loading" });
      promise
        .then((value) =>
          ToastState.create({
            id,
            type: "success",
            title: typeof messages.success === "function" ? messages.success(value) : messages.success,
          }),
        )
        .catch((error) =>
          ToastState.create({
            id,
            type: "error",
            title: typeof messages.error === "function" ? messages.error(error) : messages.error,
          }),
        );
      return promise;
    },
  },
);

const DEFAULT_DURATION = 4000;

function ToastIcon({ type }: { type: ToastType }) {
  const bg = useThemeColor("bg");
  switch (type) {
    case "success":
      return <CircleCheck size={14} color={bg} />;
    case "error":
      return <CircleX size={14} color={bg} />;
    case "warning":
      return <CircleAlert size={14} color={bg} />;
    case "info":
      return <Info size={14} color={bg} />;
    case "loading":
      return <ActivityIndicator size={14} color={bg} />;
    default:
      return null;
  }
}

function ToasterItem({ item }: { item: ToastT }) {
  const progress = useRef(new Animated.Value(0)).current;
  const remaining = useRef(item.duration ?? DEFAULT_DURATION);
  const startedAt = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  };

  const pause = () => {
    clear();
    remaining.current -= Date.now() - startedAt.current;
  };

  const resume = () => {
    // Loading toasts live until updated or dismissed, like sonner.
    if (item.type === "loading" || item.dismiss) return;
    clear();
    startedAt.current = Date.now();
    timer.current = setTimeout(() => {
      item.onAutoClose?.(item.id);
      ToastState.dismiss(item.id);
    }, Math.max(0, remaining.current));
  };

  useEffect(() => {
    remaining.current = item.duration ?? DEFAULT_DURATION;
    resume();
    return clear;
    // Restart the clock whenever the toast morphs (promise flows re-create by id).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.type, item.duration, item.dismiss]);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: item.dismiss ? 0 : 1,
      duration: 180,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished && item.dismiss) {
        item.onDismiss?.(item.id);
        ToastState.remove(item.id);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.dismiss]);

  const animatedStyle = useMemo(
    () => ({
      opacity: progress,
      transform: [
        { translateY: progress.interpolate({ inputRange: [0, 1], outputRange: [16, 0] }) },
      ],
    }),
    [progress],
  );

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={() => ToastState.dismiss(item.id)}
        onPressIn={pause}
        onPressOut={resume}
      >
        <Toast.Root
          open={!item.dismiss}
          onOpenChange={(open) => !open && ToastState.dismiss(item.id)}
          className="flex-row items-center gap-2.5"
        >
          <ToastIcon type={item.type} />
          <View className="shrink">
            {item.title ? <Toast.Title>{item.title}</Toast.Title> : null}
            {item.description ? <Toast.Description>{item.description}</Toast.Description> : null}
          </View>
        </Toast.Root>
      </Pressable>
    </Animated.View>
  );
}

export type ToasterProps = ViewProps & { visibleToasts?: number };

// Mount once at the app root, inside ThemeProvider.
export function Toaster({ className, visibleToasts = 3, ...props }: ToasterProps) {
  const [active, setActive] = useState<ToastT[]>([]);
  useEffect(() => ToastState.subscribe(setActive), []);
  if (active.length === 0) return null;
  return (
    <View
      className={cn("absolute inset-x-0 bottom-0 items-stretch gap-2 p-4 pb-8", className)}
      pointerEvents="box-none"
      {...props}
    >
      {active.slice(-visibleToasts).map((item) => (
        <ToasterItem key={item.id} item={item} />
      ))}
    </View>
  );
}
