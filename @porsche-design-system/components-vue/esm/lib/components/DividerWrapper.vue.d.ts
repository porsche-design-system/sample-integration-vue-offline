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
declare const _default: import("vue").DefineComponent<PDividerProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PDividerProps> & Readonly<{}>, {
    direction: BreakpointCustomizable<DividerDirection>;
    color: DividerColor;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
