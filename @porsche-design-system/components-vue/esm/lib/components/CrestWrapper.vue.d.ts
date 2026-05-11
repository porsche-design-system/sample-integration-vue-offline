import type { SelectedAriaAttributes, CrestAriaAttribute, CrestTarget } from '../types';
type PCrestProps = {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<CrestAriaAttribute>;
    /**
     * When providing an url then the component will be rendered as `<a>`.
     */
    href?: string;
    /**
     * Target attribute where the link should be opened.
     */
    target?: CrestTarget;
};
declare const __VLS_export: import("vue").DefineComponent<PCrestProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PCrestProps> & Readonly<{}>, {
    target: CrestTarget;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
