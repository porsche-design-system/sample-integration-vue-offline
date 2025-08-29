import type { BreakpointCustomizable, CheckboxWrapperState, Theme } from '../types';
type PCheckboxWrapperProps = {
    /**
     * Show or hide label. For better accessibility it's recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * The label text.
     */
    label?: string;
    /**
     * @experimental Disables the checkbox and shows a loading indicator.
     */
    loading?: boolean;
    /**
     * The message styled depending on validation state.
     */
    message?: string;
    /**
     * The validation state.
     */
    state?: CheckboxWrapperState;
    /**
     * Adapts the color depending on the theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PCheckboxWrapperProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PCheckboxWrapperProps> & Readonly<{}>, {
    label: string;
    state: CheckboxWrapperState;
    hideLabel: BreakpointCustomizable<boolean>;
    loading: boolean;
    message: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
/** @deprecated since v3.29.0, will be removed with next major release. Please use `p-checkbox` instead. */
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
