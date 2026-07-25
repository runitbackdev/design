import { Minus, Plus } from "lucide-react-native";
import { createContext, useContext, useMemo, type ReactNode } from "react";
import { Pressable, TextInput, View, type PressableProps, type TextInputProps, type ViewProps } from "react-native";
import { cn } from "./cn";
import { clamp, useThemeColor } from "./shared";

type NumberFieldState = {
  value: number;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
  onValueChange: (value: number) => void;
};

const NumberFieldContext = createContext<NumberFieldState>({
  value: 0,
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  step: 1,
  disabled: false,
  onValueChange: () => {},
});

export type NumberFieldRootProps = Omit<ViewProps, "children"> & {
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  children?: ReactNode;
};

function Root({
  className,
  value,
  onValueChange,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
  disabled = false,
  ...props
}: NumberFieldRootProps) {
  const state = useMemo(
    () => ({ value, min, max, step, disabled, onValueChange }),
    [value, min, max, step, disabled, onValueChange],
  );
  return (
    <NumberFieldContext value={state}>
      <View className={cn("gap-1.5", className)} {...props} />
    </NumberFieldContext>
  );
}

function Group({ className, ...props }: ViewProps) {
  return (
    <View
      className={cn(
        "flex-row items-center self-start overflow-hidden rounded-lg border border-soft-border bg-surface",
        className,
      )}
      {...props}
    />
  );
}

type StepProps = Omit<PressableProps, "children"> & { children?: ReactNode };

function StepButton({
  direction,
  className,
  children,
  ...props
}: StepProps & { direction: 1 | -1 }) {
  const { value, min, max, step, disabled, onValueChange } = useContext(NumberFieldContext);
  const sub = useThemeColor("sub");
  const next = clamp(value + direction * step, min, max);
  const atBound = next === value;
  const Icon = direction === 1 ? Plus : Minus;
  return (
    <Pressable
      accessibilityLabel={direction === 1 ? "Increase" : "Decrease"}
      className={cn(
        "size-8 items-center justify-center active:bg-soft",
        (disabled || atBound) && "opacity-45",
        className,
      )}
      disabled={disabled || atBound}
      onPress={() => onValueChange(next)}
      {...props}
    >
      {children ?? <Icon size={14} color={sub} />}
    </Pressable>
  );
}

function Decrement(props: StepProps) {
  return <StepButton direction={-1} {...props} />;
}

function Increment(props: StepProps) {
  return <StepButton direction={1} {...props} />;
}

function Input({ className, ...props }: TextInputProps) {
  const { value, min, max, disabled, onValueChange } = useContext(NumberFieldContext);
  return (
    <TextInput
      className={cn("w-14 border-x border-line py-1.5 text-center font-mono text-small text-ink", className)}
      keyboardType="numeric"
      editable={!disabled}
      defaultValue={String(value)}
      key={value}
      onEndEditing={(e) => {
        const parsed = Number.parseFloat(e.nativeEvent.text);
        if (!Number.isNaN(parsed)) onValueChange(clamp(parsed, min, max));
      }}
      {...props}
    />
  );
}

export const NumberField = { Root, Group, Decrement, Increment, Input };
