import type { DividerColor, BreakpointCustomizable, DividerDirection, DividerOrientation, Theme } from '../types';
type PDividerProps = {
    /**
     * Defines color depending on theme.
     */
    color?: DividerColor;
    /**
     * Defines direction.
     */
    direction?: BreakpointCustomizable<DividerDirection>;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `direction` instead. Defines orientation.
     */
    orientation?: BreakpointCustomizable<DividerOrientation>;
    /**
     * Adapts color depending on theme.
     */
    theme?: Theme;
};
declare const __VLS_export: import("vue").DefineComponent<PDividerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PDividerProps> & Readonly<{}>, {
    direction: BreakpointCustomizable<DividerDirection>;
    color: DividerColor;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
