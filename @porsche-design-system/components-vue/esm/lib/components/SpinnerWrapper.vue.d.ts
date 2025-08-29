import type { SelectedAriaAttributes, SpinnerAriaAttribute, BreakpointCustomizable, SpinnerSize, Theme } from '../types';
type PSpinnerProps = {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<SpinnerAriaAttribute>;
    /**
     * Size of the spinner.
     */
    size?: BreakpointCustomizable<SpinnerSize>;
    /**
     * Adapts the spinner color depending on the theme.
     */
    theme?: Theme;
};
declare const _default: import("vue").DefineComponent<PSpinnerProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PSpinnerProps> & Readonly<{}>, {
    size: BreakpointCustomizable<SpinnerSize>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
