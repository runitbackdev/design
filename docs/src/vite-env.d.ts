/// <reference types="vite/client" />

declare module "*?raw" {
  const src: string;
  export default src;
}

declare module "*?highlight" {
  const html: string;
  export default html;
}
