import type { BreakpointCustomizable, CheckboxUpdateEventDetail, CheckboxState, Theme } from '../types';
type PCheckboxProps = {
    /**
     * Reflects the checkbox current checked state and allows setting the initial checked state.
     */
    checked?: boolean;
    /**
     * Displays as compact version.
     */
    compact?: boolean;
    /**
     * Marks the checkbox as disabled.
     */
    disabled?: boolean;
    /**
     * The id of a form element the checkbox should be associated with.
     */
    form?: string;
    /**
     * Show or hide label. For better accessibility it's recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * Marks the checkbox as indeterminate.
     */
    indeterminate?: boolean;
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
     * The name of the checkbox.
     */
    name?: string;
    /**
     * Marks the checkbox as required.
     */
    required?: boolean;
    /**
     * The validation state.
     */
    state?: CheckboxState;
    /**
     * Adapts the color depending on the theme.
     */
    theme?: Theme;
    /**
     * The checkbox value. When a form is submitted, only a checkbox which is currently checked is included in the submission.
     */
    value?: string;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PCheckboxProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    blur: (value: Event) => any;
    update: (value: CheckboxUpdateEventDetail) => any;
}, string, import("vue").PublicProps, Readonly<PCheckboxProps> & Readonly<{
    onBlur?: ((value: Event) => any) | undefined;
    onUpdate?: ((value: CheckboxUpdateEventDetail) => any) | undefined;
}>, {
    label: string;
    compact: boolean;
    state: CheckboxState;
    required: boolean;
    disabled: boolean;
    hideLabel: BreakpointCustomizable<boolean>;
    loading: boolean;
    name: string;
    value: string;
    checked: boolean;
    indeterminate: boolean;
    message: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
