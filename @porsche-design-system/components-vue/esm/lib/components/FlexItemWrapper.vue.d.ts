import type { BreakpointCustomizable, FlexItemAlignSelf, FlexItemFlex, FlexItemGrow, FlexItemOffset, FlexItemShrink, FlexItemWidth } from '../types';
type PFlexItemProps = {
    /**
     * Defines how this flex item is aligned along the cross axis. This overwrites the cross axis alignment set by the container. Corresponds to the "alignSelf" css property.
     */
    alignSelf?: BreakpointCustomizable<FlexItemAlignSelf>;
    /**
     * The shorthand property for the combined definition of "shrink", "grow" and "basis"
     */
    flex?: BreakpointCustomizable<FlexItemFlex>;
    /**
     * The ability to allow/disallow the flex child to grow.
     */
    grow?: BreakpointCustomizable<FlexItemGrow>;
    /**
     * The offset of the column. You can also supply values for specific breakpoints, like {base: "none", l: "one-quarter"}. You always need to provide a base value when doing this.
     */
    offset?: BreakpointCustomizable<FlexItemOffset>;
    /**
     * The ability to allow/disallow the flex child to shrink.
     */
    shrink?: BreakpointCustomizable<FlexItemShrink>;
    /**
     * The width of the flex item. You can also supply values for specific breakpoints, like {base: "full", l: "one-quarter"}. You always need to provide a base value when doing this.
     */
    width?: BreakpointCustomizable<FlexItemWidth>;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PFlexItemProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PFlexItemProps> & Readonly<{}>, {
    width: BreakpointCustomizable<FlexItemWidth>;
    alignSelf: BreakpointCustomizable<FlexItemAlignSelf>;
    flex: BreakpointCustomizable<FlexItemFlex>;
    grow: BreakpointCustomizable<FlexItemGrow>;
    offset: BreakpointCustomizable<FlexItemOffset>;
    shrink: BreakpointCustomizable<FlexItemShrink>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Flex instead. */
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
