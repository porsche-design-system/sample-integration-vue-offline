import type { SelectedAriaAttributes, WordmarkAriaAttribute, WordmarkSize, WordmarkTarget, Theme } from '../types';
type PWordmarkProps = {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<WordmarkAriaAttribute>;
    /**
     * When providing an url then the component will be rendered as `<a>`.
     */
    href?: string;
    /**
     * Adapts sizing of wordmark.
     */
    size?: WordmarkSize;
    /**
     * Target attribute where the link should be opened.
     */
    target?: WordmarkTarget;
    /**
     * Adapts color depending on theme.
     */
    theme?: Theme;
};
declare const __VLS_export: import("vue").DefineComponent<PWordmarkProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PWordmarkProps> & Readonly<{}>, {
    size: WordmarkSize;
    target: WordmarkTarget;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
