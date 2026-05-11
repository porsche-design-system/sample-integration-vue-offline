import type { HeadlineAlign, HeadlineColor, HeadlineTag, Theme, HeadlineVariant } from '../types';
type PHeadlineProps = {
    /**
     * Text alignment of the component.
     */
    align?: HeadlineAlign;
    /**
     * Basic text color variations depending on theme property.
     */
    color?: HeadlineColor;
    /**
     * Adds an ellipsis to a single line of text if it overflows.
     */
    ellipsis?: boolean;
    /**
     * Sets a custom HTML tag depending on the usage of the headline component.
     */
    tag?: HeadlineTag;
    /**
     * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
     */
    theme?: Theme;
    /**
     * Predefined style of the headline.
     */
    variant?: HeadlineVariant;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PHeadlineProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PHeadlineProps> & Readonly<{}>, {
    variant: HeadlineVariant;
    align: HeadlineAlign;
    color: HeadlineColor;
    ellipsis: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
/** @deprecated since v3.0.0, will be removed with next major release. Please use "p-heading" instead. */
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
