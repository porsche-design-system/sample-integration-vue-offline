import type { AccordionHeadingTag, BreakpointCustomizable, AccordionSize, AccordionTag, Theme } from '../types';
type PAccordionProps = {
    /**
     * Displays the Accordion as compact version with thinner border and smaller paddings.
     */
    compact?: boolean;
    /**
     * Defines the heading used in accordion.
     */
    heading?: string;
    /**
     * Sets a heading tag, so it fits correctly within the outline of the page.
     */
    headingTag?: AccordionHeadingTag;
    /**
     * Defines if accordion is open.
     */
    open?: boolean;
    /**
     * The text size.
     */
    size?: BreakpointCustomizable<AccordionSize>;
    /**
     * @experimental Sticks the Accordion heading at the top, fixed while scrolling
     */
    sticky?: boolean;
    /**
     * @deprecated , will be removed with next major release, use `heading-tag` instead. Sets a heading tag, so it fits correctly within the outline of the page.
     */
    tag?: AccordionTag;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PAccordionProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    accordionChange: (value: import("../types").AccordionUpdateEvent) => any;
    update: (value: import("../types").AccordionUpdateEvent) => any;
}, string, import("vue").PublicProps, Readonly<PAccordionProps> & Readonly<{
    onAccordionChange?: ((value: import("../types").AccordionUpdateEvent) => any) | undefined;
    onUpdate?: ((value: import("../types").AccordionUpdateEvent) => any) | undefined;
}>, {
    headingTag: AccordionHeadingTag;
    size: BreakpointCustomizable<AccordionSize>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
