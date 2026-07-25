// Ambient stand-ins for app-provided engines (see env.d.ts for the pattern):
// script file on purpose; only the surface Drawer.tsx consumes.
declare module "@gorhom/bottom-sheet" {
  import type { ComponentType, ReactNode, Ref } from "react";
  import type { StyleProp, ViewStyle } from "react-native";

  export interface BottomSheetModalMethods {
    present(): void;
    dismiss(): void;
  }

  export interface BottomSheetBackdropProps {
    style?: StyleProp<ViewStyle>;
    animatedIndex: unknown;
    animatedPosition: unknown;
  }

  export const BottomSheetModal: (props: {
    ref?: Ref<BottomSheetModalMethods>;
    onDismiss?: () => void;
    snapPoints?: Array<string | number>;
    enableDynamicSizing?: boolean;
    backdropComponent?: ComponentType<BottomSheetBackdropProps> | null;
    handleComponent?: ComponentType<object> | null;
    backgroundStyle?: StyleProp<ViewStyle>;
    children?: ReactNode;
  }) => ReactNode;

  export const BottomSheetBackdrop: ComponentType<
    BottomSheetBackdropProps & {
      appearsOnIndex?: number;
      disappearsOnIndex?: number;
      pressBehavior?: "close" | "collapse" | "none" | number;
    }
  >;

  export const BottomSheetView: ComponentType<{
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
  }>;

  export const BottomSheetModalProvider: ComponentType<{ children?: ReactNode }>;
}

declare module "react-native-gesture-handler" {
  import type { ComponentType, ReactNode } from "react";
  import type { StyleProp, ViewStyle } from "react-native";

  export const GestureHandlerRootView: ComponentType<{
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
  }>;
}
