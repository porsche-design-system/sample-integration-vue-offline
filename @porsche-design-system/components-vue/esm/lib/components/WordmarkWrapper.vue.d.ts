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
declare const _default: import("vue").DefineComponent<PWordmarkProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PWordmarkProps> & Readonly<{}>, {
    size: WordmarkSize;
    target: WordmarkTarget;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
