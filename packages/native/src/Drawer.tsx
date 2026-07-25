import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
  type BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { useEffect, useMemo, useRef, type ComponentRef, type ReactNode } from "react";
import { View, type TextProps, type ViewProps } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { cn } from "./cn";
import { useThemeColor } from "./shared";
import { Text } from "./Text";

// Web's Drawer is a swipe-driven sheet; the native engine is @gorhom/bottom-sheet
// (app provides it plus react-native-gesture-handler). Same design language,
// different muscles.

export type DrawerProviderProps = { children: ReactNode };

// Mount once around the app, inside ThemeProvider.
function Provider({ children }: DrawerProviderProps) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

function Backdrop(props: BottomSheetBackdropProps) {
  const scrim = useThemeColor("scrim");
  const style = useMemo(() => [props.style, { backgroundColor: scrim }], [props.style, scrim]);
  return (
    <BottomSheetBackdrop
      {...props}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      pressBehavior="close"
      style={style}
    />
  );
}

function Handle() {
  return (
    <View className="items-center py-3">
      <View className="h-1 w-10 rounded-full bg-line" />
    </View>
  );
}

export type DrawerRootProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  snapPoints?: Array<string | number>;
  children: ReactNode;
};

const sheetRadius = 16;

function Root({ open, onOpenChange, snapPoints, children }: DrawerRootProps) {
  const modal = useRef<ComponentRef<typeof BottomSheetModal>>(null);
  const surface = useThemeColor("surface");
  useEffect(() => {
    if (open) modal.current?.present();
    else modal.current?.dismiss();
  }, [open]);
  const backgroundStyle = useMemo(
    () => ({
      backgroundColor: surface,
      borderTopLeftRadius: sheetRadius,
      borderTopRightRadius: sheetRadius,
    }),
    [surface],
  );
  return (
    <BottomSheetModal
      ref={modal}
      onDismiss={() => onOpenChange(false)}
      snapPoints={snapPoints}
      enableDynamicSizing={!snapPoints}
      backdropComponent={Backdrop}
      handleComponent={Handle}
      backgroundStyle={backgroundStyle}
    >
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheetModal>
  );
}

function Content({ className, ...props }: ViewProps) {
  return <View className={cn("gap-1 px-5 pb-8", className)} {...props} />;
}

function Title({ className, ...props }: TextProps) {
  return <Text className={cn("font-mono-semibold text-subhead", className)} {...props} />;
}

function Description({ className, ...props }: TextProps) {
  return (
    <Text className={cn("font-sans text-small leading-relaxed text-sub", className)} {...props} />
  );
}

export const Drawer = { Provider, Root, Content, Title, Description };
