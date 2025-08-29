import type { SelectedAriaAttributes, DrilldownLinkAriaAttribute, DrilldownLinkTarget } from '../types';
type PDrilldownLinkProps = {
    /**
     * Display link in active state.
     */
    active?: boolean;
    /**
     * Add ARIA attributes (only has effect when `href` is defined and no slotted anchor is used).
     */
    aria?: SelectedAriaAttributes<DrilldownLinkAriaAttribute>;
    /**
     * Special download attribute to open native browser download dialog if target url points to a downloadable file (only has effect when `href` is defined and no slotted anchor is used).
     */
    download?: string;
    /**
     * When providing an url then the component will be rendered as `<a>` otherwise the component expects a slotted anchor.
     */
    href?: string;
    /**
     * Specifies the relationship of the target object to the link object (only has effect when `href` is defined and no slotted anchor is used).
     */
    rel?: string;
    /**
     * Target attribute where the link should be opened (only has effect when `href` is defined and no slotted anchor is used).
     */
    target?: DrilldownLinkTarget;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PDrilldownLinkProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PDrilldownLinkProps> & Readonly<{}>, {
    target: DrilldownLinkTarget;
    active: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
