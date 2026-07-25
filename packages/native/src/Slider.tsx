import * as SliderPrimitive from "@rn-primitives/slider";
import { createContext, useContext, useMemo, useRef } from "react";
import { PanResponder, View, type TextProps, type ViewProps } from "react-native";
import { cn } from "./cn";
import { clamp } from "./shared";
import { Text } from "./Text";

type SliderState = {
  pct: number;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
  onValueChange?: (value: number[]) => void;
};

// The primitive is display + a11y only on native; gestures are ours.
const SliderContext = createContext<SliderState>({
  pct: 0,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
});

function Root({
  className,
  value,
  min = 0,
  max = 100,
  step = 1,
  disabled,
  onValueChange,
  ...props
}: SliderPrimitive.RootProps) {
  const pct = max > min ? ((value - min) / (max - min)) * 100 : 0;
  const state = useMemo(
    () => ({ pct, min, max, step, disabled: !!disabled, onValueChange }),
    [pct, min, max, step, disabled, onValueChange],
  );
  return (
    <SliderContext value={state}>
      <SliderPrimitive.Root
        className={cn("w-full gap-2", className)}
        value={value}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onValueChange={onValueChange}
        {...props}
      />
    </SliderContext>
  );
}

function Label({ className, ...props }: TextProps) {
  return (
    <Text
      className={cn("font-mono-medium text-caption tracking-wider text-sub", className)}
      {...props}
    />
  );
}

function Value({ className, ...props }: TextProps) {
  return <Text className={cn("font-mono text-caption text-sub", className)} {...props} />;
}

function Control({ className, children, ...props }: ViewProps) {
  const state = useContext(SliderContext);
  // Latest-state ref so the responder is created once, not per drag frame.
  const stateRef = useRef(state);
  stateRef.current = state;
  const width = useRef(0);
  const responder = useMemo(() => {
    const update = (x: number) => {
      const { min, max, step, onValueChange } = stateRef.current;
      if (!width.current || !onValueChange) return;
      let v = min + (x / width.current) * (max - min);
      if (step > 0) v = Math.round(v / step) * step;
      onValueChange([clamp(v, min, max)]);
    };
    return PanResponder.create({
      onStartShouldSetPanResponder: () => !stateRef.current.disabled,
      onMoveShouldSetPanResponder: () => !stateRef.current.disabled,
      onPanResponderGrant: (e) => update(e.nativeEvent.locationX),
      onPanResponderMove: (e) => update(e.nativeEvent.locationX),
    });
  }, []);
  return (
    <View
      onLayout={(e) => {
        width.current = e.nativeEvent.layout.width;
      }}
      className={cn("w-full justify-center py-1.5", className)}
      {...responder.panHandlers}
      {...props}
    >
      {children}
    </View>
  );
}

function Track({ className, ...props }: SliderPrimitive.TrackProps) {
  return (
    <SliderPrimitive.Track
      className={cn("h-1.5 w-full rounded-full bg-soft", className)}
      {...props}
    />
  );
}

function Range({ className, style, ...props }: SliderPrimitive.RangeProps) {
  const { pct } = useContext(SliderContext);
  return (
    <SliderPrimitive.Range
      className={cn("h-full rounded-full bg-accent", className)}
      style={[{ width: `${pct}%` }, style]}
      {...props}
    />
  );
}

function Thumb({ className, style, ...props }: SliderPrimitive.ThumbProps) {
  const { pct, disabled } = useContext(SliderContext);
  return (
    <SliderPrimitive.Thumb
      className={cn(
        "absolute size-4 -ml-2 rounded-full border border-soft-border bg-surface shadow-1",
        disabled && "opacity-45",
        className,
      )}
      style={[{ left: `${pct}%` }, style]}
      {...props}
    />
  );
}

export const Slider = { Root, Label, Value, Control, Track, Range, Thumb };
