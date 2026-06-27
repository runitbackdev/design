import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// tailwind-merge only knows Tailwind's built-in font sizes. Register our brand
// scale so it treats e.g. `text-control` as a size, not a color — otherwise it
// drops a variant's `text-*` color when a size class is also present.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display",
            "title",
            "subhead",
            "body",
            "small",
            "data",
            "caption",
            "overline",
            "control",
            "control-sm",
          ],
        },
      ],
    },
  },
});

type StateClass<S> = (state: S) => string | undefined;

const merge = (inputs: ClassValue[]) => twMerge(clsx(inputs));

// Base UI's `className` can be a `(state) => string` callback. `cn` mirrors that:
// given only plain values it returns a string; given a callback it returns one,
// so a single helper styles both plain elements and Base UI parts.
export function cn(...inputs: ClassValue[]): string;
export function cn<S>(...inputs: Array<ClassValue | StateClass<S>>): string | StateClass<S>;
export function cn<S>(...inputs: Array<ClassValue | StateClass<S>>): string | StateClass<S> {
  if (inputs.every((input) => typeof input !== "function")) {
    return merge(inputs as ClassValue[]);
  }
  return (state: S) =>
    merge(inputs.map((input) => (typeof input === "function" ? input(state) : input)));
}
