import type { BreakpointCustomizable, RadioButtonWrapperState, Theme } from '../types';
type PRadioButtonWrapperProps = {
    /**
     * Show or hide label. For better accessibility it's recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * The label text.
     */
    label?: string;
    /**
     * @experimental Disables the radio button and shows a loading indicator.
     */
    loading?: boolean;
    /**
     * The message styled depending on validation state.
     */
    message?: string;
    /**
     * The validation state.
     */
    state?: RadioButtonWrapperState;
    /**
     * Adapts the color depending on the theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PRadioButtonWrapperProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PRadioButtonWrapperProps> & Readonly<{}>, {
    label: string;
    state: RadioButtonWrapperState;
    hideLabel: BreakpointCustomizable<boolean>;
    loading: boolean;
    message: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
/** @deprecated since v3.30.0, will be removed with next major release. Please use `p-radio-group` instead. */
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
