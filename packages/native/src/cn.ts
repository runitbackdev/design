import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// tailwind-merge only knows Tailwind's built-in font sizes. Register our brand
// scale so it treats e.g. `text-control` as a size, not a color — otherwise it
// drops a variant's `text-*` color when a size class is also present.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-family": [
        { font: ["sans", "sans-medium", "sans-semibold", "mono", "mono-medium", "mono-semibold"] },
      ],
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

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
