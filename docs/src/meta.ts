export type Item = { slug: string; title: string; intro: string };
export type Group = { label: string; items: Item[] };

export const groups: Group[] = [
  {
    label: "Actions",
    items: [
      { slug: "button", title: "Button", intro: "Boring by default. Every variant names the weight of its action." },
      { slug: "toggle", title: "Toggle", intro: "A single on/off control that stays pressed." },
      { slug: "togglegroup", title: "Toggle group", intro: "A row of toggles where the selection is the state." },
    ],
  },
  {
    label: "Display",
    items: [
      { slug: "badge", title: "Badge", intro: "A small label for status and counts. Tone carries the meaning." },
      { slug: "avatar", title: "Avatar", intro: "Initials or an image, at a couple of fixed sizes." },
      { slug: "card", title: "Card", intro: "A bordered surface that groups related content." },
      { slug: "kbd", title: "Kbd", intro: "Renders a keyboard key inline with text." },
      { slug: "textlink", title: "Text link", intro: "An inline link that sits inside prose." },
      { slug: "wordmark", title: "Wordmark", intro: "The Run It Back wordmark." },
      { slug: "separator", title: "Separator", intro: "A thin rule that divides content, horizontal or vertical." },
    ],
  },
  {
    label: "Forms",
    items: [
      { slug: "field", title: "Field", intro: "Label, control, description, and error wired together." },
      { slug: "input", title: "Input", intro: "A plain text input." },
      { slug: "select", title: "Select", intro: "Pick one option from a list in a popup." },
      { slug: "checkbox", title: "Checkbox", intro: "A single boolean choice." },
      { slug: "checkboxgroup", title: "Checkbox group", intro: "Several checkboxes sharing one value." },
      { slug: "radio", title: "Radio", intro: "Pick exactly one from a small set." },
      { slug: "switch", title: "Switch", intro: "A boolean you flip on or off." },
      { slug: "slider", title: "Slider", intro: "Pick a number along a track." },
      { slug: "otpfield", title: "OTP field", intro: "One slot per character for short codes." },
      { slug: "numberfield", title: "Number field", intro: "A number input with step controls." },
      { slug: "form", title: "Form", intro: "A form wrapper that lays out fields and a submit." },
      { slug: "fieldset", title: "Fieldset", intro: "A legend over a group of related controls." },
    ],
  },
  {
    label: "Pickers",
    items: [
      { slug: "combobox", title: "Combobox", intro: "Type to filter, then pick — with selection state." },
      { slug: "autocomplete", title: "Autocomplete", intro: "Type to filter a list of suggestions." },
    ],
  },
  {
    label: "Overlays",
    items: [
      { slug: "dialog", title: "Dialog", intro: "A modal surface for focused tasks." },
      { slug: "alertdialog", title: "Alert dialog", intro: "A modal that demands a yes/no decision." },
      { slug: "popover", title: "Popover", intro: "A small floating panel anchored to a trigger." },
      { slug: "tooltip", title: "Tooltip", intro: "A hint that appears on hover or focus." },
      { slug: "menu", title: "Menu", intro: "A list of actions, with groups and submenus." },
      { slug: "contextmenu", title: "Context menu", intro: "The same menu, opened by right-click." },
      { slug: "previewcard", title: "Preview card", intro: "A hover card that previews a link's target." },
      { slug: "drawer", title: "Drawer", intro: "A swipe-dismissable sheet from an edge." },
      { slug: "toast", title: "Toast", intro: "A transient message stacked in a corner." },
    ],
  },
  {
    label: "Disclosure",
    items: [
      { slug: "collapsible", title: "Collapsible", intro: "Show or hide one region of content." },
      { slug: "accordion", title: "Accordion", intro: "A stack of collapsible sections." },
      { slug: "tabs", title: "Tabs", intro: "Switch between panels in the same space." },
    ],
  },
  {
    label: "Navigation",
    items: [
      { slug: "navigationmenu", title: "Navigation menu", intro: "A menu bar whose items reveal rich panels." },
      { slug: "menubar", title: "Menubar", intro: "A row of menus, like a desktop app." },
      { slug: "toolbar", title: "Toolbar", intro: "A grouped row of controls." },
    ],
  },
  {
    label: "Feedback",
    items: [
      { slug: "progress", title: "Progress", intro: "How far along a task is." },
      { slug: "meter", title: "Meter", intro: "A static measurement within a known range." },
    ],
  },
  {
    label: "Layout",
    items: [
      { slug: "scrollarea", title: "Scroll area", intro: "A scroll container with thin custom bars." },
    ],
  },
];

export const items = groups.flatMap((g) => g.items);
export const itemBySlug = new Map(items.map((i) => [i.slug, i]));

export const paletteItems = groups.flatMap((g) => g.items.map((i) => ({ ...i, group: g.label })));
export type PaletteItem = (typeof paletteItems)[number];
