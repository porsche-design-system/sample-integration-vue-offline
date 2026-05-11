import type { BreakpointCustomizable, ButtonGroupDirection } from '../types';
type PButtonGroupProps = {
    /**
     * Defines the direction of the main and cross axis. The default is ’{base: ‘column’, xs: ‘row’}' showing buttons vertically stacked on mobile viewports and side-by-side in a horizontal row from breakpoint ‘xs’. You always need to provide a base value when using breakpoints.
     */
    direction?: BreakpointCustomizable<ButtonGroupDirection>;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PButtonGroupProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PButtonGroupProps> & Readonly<{}>, {
    direction: BreakpointCustomizable<ButtonGroupDirection>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
/** @deprecated since v3.32.0, will be removed with next major release. Use simple styles instead. */
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
