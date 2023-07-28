import 'astro/astro-jsx';

declare global {
  namespace JSX {
    export type Element = HTMLElement;
    // type Element = astroHTML.JSX.Element // We want to use this, but it is defined as any.
    export type IntrinsicElements = astroHTML.JSX.IntrinsicElements;
  }
}
