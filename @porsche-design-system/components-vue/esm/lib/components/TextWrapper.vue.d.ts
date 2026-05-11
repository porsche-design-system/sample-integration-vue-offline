import type { TextAlign, TextColor, BreakpointCustomizable, TextSize, TextTag, Theme, TextWeight } from '../types';
type PTextProps = {
    /**
     * Text alignment of the component.
     */
    align?: TextAlign;
    /**
     * Basic text color variations depending on theme property.
     */
    color?: TextColor;
    /**
     * Adds an ellipsis to a single line of text if it overflows.
     */
    ellipsis?: boolean;
    /**
     * Size of the text. Also defines the size for specific breakpoints, like {base: "small", l: "medium"}. You always need to provide a base value when doing this.
     */
    size?: BreakpointCustomizable<TextSize>;
    /**
     * Sets a custom HTML tag depending on the usage of the text component.
     */
    tag?: TextTag;
    /**
     * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
     */
    theme?: Theme;
    /**
     * The weight of the text.
     */
    weight?: TextWeight;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PTextProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PTextProps> & Readonly<{}>, {
    weight: TextWeight;
    size: BreakpointCustomizable<TextSize>;
    tag: TextTag;
    align: TextAlign;
    color: TextColor;
    ellipsis: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
