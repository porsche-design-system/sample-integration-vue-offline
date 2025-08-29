import type { BreakpointCustomizable, GridDirection, GridGutter, GridWrap } from '../types';
type PGridProps = {
    /**
     * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {base: "column", l: "row"}. You always need to provide a base value when doing this.
     */
    direction?: BreakpointCustomizable<GridDirection>;
    /**
     * Has no effect anymore
     * @deprecated since v3.0.0, will be removed with next major release
     */
    gutter?: BreakpointCustomizable<GridGutter>;
    /**
     * Handles wrapping behaviour of elements.
     */
    wrap?: BreakpointCustomizable<GridWrap>;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PGridProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PGridProps> & Readonly<{}>, {
    wrap: BreakpointCustomizable<GridWrap>;
    direction: BreakpointCustomizable<GridDirection>;
    gutter: BreakpointCustomizable<GridGutter>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Grid instead. */
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
