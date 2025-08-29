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
declare const __VLS_component: import("vue").DefineComponent<PTextProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PTextProps> & Readonly<{}>, {
    weight: TextWeight;
    size: BreakpointCustomizable<TextSize>;
    tag: TextTag;
    align: TextAlign;
    color: TextColor;
    ellipsis: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
