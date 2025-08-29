import type { SelectedAriaAttributes, MarqueAriaAttribute, MarqueSize, MarqueTarget, MarqueVariant } from '../types';
type PMarqueProps = {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<MarqueAriaAttribute>;
    /**
     * When providing an url then the component will be rendered as `<a>`.
     */
    href?: string;
    /**
     * Adapts sizing of marque.
     */
    size?: MarqueSize;
    /**
     * Target attribute where the link should be opened.
     */
    target?: MarqueTarget;
    /**
     * Show/hide trademark sign (only has effect when variant is set to default).
     */
    trademark?: boolean;
    /**
     * Shows marque in special editions
     */
    variant?: MarqueVariant;
};
/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-wordmark" instead. */
declare const _default: import("vue").DefineComponent<PMarqueProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PMarqueProps> & Readonly<{}>, {
    size: MarqueSize;
    target: MarqueTarget;
    variant: MarqueVariant;
    trademark: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
