import type { BreakpointCustomizable, FlexAlignContent, FlexAlignItems, FlexDirection, FlexInline, FlexJustifyContent, FlexWrap } from '../types';
type PFlexProps = {
    /**
     * This aligns a flex container's individual lines when there is extra space in the cross-axis, similar to how "justifyContent" aligns individual items along the main axis.
     */
    alignContent?: BreakpointCustomizable<FlexAlignContent>;
    /**
     * Defines how the flex items are aligned along the cross axis.
     */
    alignItems?: BreakpointCustomizable<FlexAlignItems>;
    /**
     * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right.
     */
    direction?: BreakpointCustomizable<FlexDirection>;
    /**
     * Defines the flex containers content flow if 2 or more containers are siblings of each other.
     */
    inline?: BreakpointCustomizable<FlexInline>;
    /**
     * Defines how the flex items are aligned along the main axis.
     */
    justifyContent?: BreakpointCustomizable<FlexJustifyContent>;
    /**
     * Handles wrapping behaviour of elements.
     */
    wrap?: BreakpointCustomizable<FlexWrap>;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PFlexProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PFlexProps> & Readonly<{}>, {
    inline: BreakpointCustomizable<FlexInline>;
    wrap: BreakpointCustomizable<FlexWrap>;
    direction: BreakpointCustomizable<FlexDirection>;
    alignContent: BreakpointCustomizable<FlexAlignContent>;
    alignItems: BreakpointCustomizable<FlexAlignItems>;
    justifyContent: BreakpointCustomizable<FlexJustifyContent>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Flex instead. */
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
