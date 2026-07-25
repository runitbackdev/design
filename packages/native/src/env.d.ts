// The app's NativeWind provides the real className support (and full types via
// react-native-css). Depending on react-native-css here materializes a second
// copy under pnpm and the duplicated runtime recurses — so declare the one
// prop this package consumes instead.
import "react-native";

declare module "react-native" {
  interface ViewProps {
    className?: string;
  }
  interface TextProps {
    className?: string;
  }
  interface PressableProps {
    className?: string;
  }
  interface TextInputProps {
    className?: string;
  }
  interface ImagePropsBase {
    className?: string;
  }
}
