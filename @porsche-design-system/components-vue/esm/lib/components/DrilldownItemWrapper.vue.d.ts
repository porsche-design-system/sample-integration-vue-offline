type PDrilldownItemProps = {
    /**
     * Private property set by the component itself.
     */
    cascade?: boolean;
    /**
     * Unique identifier which controls if this item should be shown when the active-identifier on the drilldown is set to this value.
     */
    identifier: string;
    /**
     * Renders back button, header section on mobile view and cascade button to reach a deeper level of the navigation structure.
     */
    label?: string;
    /**
     * Private property set by the component itself.
     */
    primary?: boolean;
    /**
     * Private property set by the component itself.
     */
    secondary?: boolean;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PDrilldownItemProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PDrilldownItemProps> & Readonly<{}>, {
    primary: boolean;
    secondary: boolean;
    cascade: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
