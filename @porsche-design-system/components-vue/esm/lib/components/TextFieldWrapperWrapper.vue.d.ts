import type { TextFieldWrapperActionIcon, BreakpointCustomizable, TextFieldWrapperState, Theme, TextFieldWrapperUnitPosition } from '../types';
type PTextFieldWrapperProps = {
    /**
     * Action icon can be set to `locate` for `input type="search"` in order to display an action button.
     */
    actionIcon?: TextFieldWrapperActionIcon;
    /**
     * Disables the action button and shows a loading indicator. No events will be triggered while loading state is active.
     */
    actionLoading?: boolean;
    /**
     * The description text.
     */
    description?: string;
    /**
     * Show or hide label and description text. For better accessibility it is recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * The label text.
     */
    label?: string;
    /**
     * The message styled depending on validation state.
     */
    message?: string;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `showCounter` instead. Show or hide max character count.
     */
    showCharacterCount?: boolean;
    /**
     * Show or hide max character count.
     */
    showCounter?: boolean;
    /**
     * @experimental Show or hide password toggle for `input type="password"`.
     */
    showPasswordToggle?: boolean;
    /**
     * The validation state.
     */
    state?: TextFieldWrapperState;
    /**
     * Show search button if wrapped inside a form.
     */
    submitButton?: boolean;
    /**
     * Adapts the color depending on the theme.
     */
    theme?: Theme;
    /**
     * The unit text.
     */
    unit?: string;
    /**
     * The unit position.
     */
    unitPosition?: TextFieldWrapperUnitPosition;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PTextFieldWrapperProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: any;
} & {
    [x: string]: any;
}, string, import("vue").PublicProps, Readonly<PTextFieldWrapperProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    label: string;
    description: string;
    state: TextFieldWrapperState;
    hideLabel: BreakpointCustomizable<boolean>;
    message: string;
    actionLoading: boolean;
    showCounter: boolean;
    showPasswordToggle: boolean;
    submitButton: boolean;
    unit: string;
    unitPosition: TextFieldWrapperUnitPosition;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
/** @deprecated since v3.29.0, will be removed with next major release. Please use one of the specific input components instead: `p-input-date`, `p-input-email`, `p-input-number`, `p-input-password`, `p-input-search`, `p-input-tel`, `p-input-text`, `p-input-time` or `p-input-url`. */
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
