// Ambient stand-in for the app-provided runtime (see env.d.ts). Script file on
// purpose: an augmentation would need the real module resolvable.
declare module "react-native-css/native" {
  import type { ReactNode } from "react";
  export function VariableContextProvider(props: {
    value: Record<string, string | number>;
    children?: ReactNode;
  }): ReactNode;
  export function useNativeVariable(name: string): string | number | undefined;
}
