import type { BreakpointCustomizable, InputWeekState, Theme } from '../types';
type PInputWeekProps = {
    /**
     * Provides a hint to the browser about what type of data the field expects, which can assist with autofill features.
     */
    autoComplete?: string;
    /**
     * A boolean value that, if present, renders the input field as a compact version.
     */
    compact?: boolean;
    /**
     * Supplementary text providing more context or explanation for the input.
     */
    description?: string;
    /**
     * A boolean value that, if present, makes the input field unusable and unclickable. The value will not be submitted with the form.
     */
    disabled?: boolean;
    /**
     * Specifies the id of the <form> element that the input belongs to (useful if the input is not a direct descendant of the form).
     */
    form?: string;
    /**
     * Controls the visibility of the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * Text content for a user-facing label.
     */
    label?: string;
    /**
     * @experimental Shows a loading indicator.
     */
    loading?: boolean;
    /**
     * Specifies the latest week that can be selected. The value must be a week string in YYYY-Www format (e.g., max='2024-W52').
     */
    max?: string;
    /**
     * Dynamic feedback text for validation or status.
     */
    message?: string;
    /**
     * Specifies the earliest week that can be selected. The value must be a week string in YYYY-Www format (e.g., min='2024-W01').
     */
    min?: string;
    /**
     * The name of the input field, used when submitting the form data.
     */
    name: string;
    /**
     * A boolean value that, if present, makes the input field uneditable by the user, but its value will still be submitted with the form.
     */
    readOnly?: boolean;
    /**
     * A boolean value that, if present, indicates that the input field must be filled out before the form can be submitted.
     */
    required?: boolean;
    /**
     * Indicates the validation or overall status of the input component.
     */
    state?: InputWeekState;
    /**
     * Defines the stepping interval in weeks. For example, step="1" increments by 1 week. The default is 1 month.
     */
    step?: number;
    /**
     * Controls the visual appearance of the component.
     */
    theme?: Theme;
    /**
     * The default week value for the input, in YYYY-Www format (e.g., value='2025-W27')
     */
    value?: string;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PInputWeekProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    blur: (value: Event) => any;
    change: (value: Event) => any;
    input: (value: InputEvent) => any;
    "update:value": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<PInputWeekProps> & Readonly<{
    onBlur?: ((value: Event) => any) | undefined;
    onChange?: ((value: Event) => any) | undefined;
    onInput?: ((value: InputEvent) => any) | undefined;
    "onUpdate:value"?: ((value: string) => any) | undefined;
}>, {
    step: number;
    label: string;
    compact: boolean;
    description: string;
    state: InputWeekState;
    required: boolean;
    disabled: boolean;
    hideLabel: BreakpointCustomizable<boolean>;
    loading: boolean;
    value: string;
    message: string;
    readOnly: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
