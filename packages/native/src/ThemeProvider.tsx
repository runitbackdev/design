import type { ReactNode } from "react";
import { useColorScheme } from "react-native";
import { VariableContextProvider } from "react-native-css/native";
import { darkVars } from "./themes";

export type ThemeProviderProps = {
  theme?: "light" | "dark" | "system";
  children: ReactNode;
};

// Light is the :root baseline; dark overrides the semantic vars, like web's
// [data-theme="dark"].
export function ThemeProvider({ theme = "system", children }: ThemeProviderProps) {
  const system = useColorScheme();
  const resolved = theme === "system" ? system : theme;
  if (resolved !== "dark") return children;
  return <VariableContextProvider value={darkVars}>{children}</VariableContextProvider>;
}
