import type { DisplayAlign, DisplayColor, BreakpointCustomizable, DisplaySize, DisplayTag, Theme } from '../types';
type PDisplayProps = {
    /**
     * Text alignment of the component.
     */
    align?: DisplayAlign;
    /**
     * Basic text color variations depending on theme property.
     */
    color?: DisplayColor;
    /**
     * Adds an ellipsis to a single line of text if it overflows.
     */
    ellipsis?: boolean;
    /**
     * Size of the component. Also defines the size for specific breakpoints, like {base: "medium", l: "large"}. You always need to provide a base value when doing this.
     */
    size?: BreakpointCustomizable<DisplaySize>;
    /**
     * Sets a heading tag, so it fits correctly within the outline of the page.
     */
    tag?: DisplayTag;
    /**
     * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PDisplayProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PDisplayProps> & Readonly<{}>, {
    size: BreakpointCustomizable<DisplaySize>;
    align: DisplayAlign;
    color: DisplayColor;
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
