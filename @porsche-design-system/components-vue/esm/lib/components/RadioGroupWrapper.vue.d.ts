import type { BreakpointCustomizable, RadioGroupDirection, RadioGroupState, Theme } from '../types';
type PRadioGroupProps = {
    /**
     * A boolean value that, if present, renders the radio group as a compact version.
     */
    compact?: boolean;
    /**
     * Supplementary text providing more context or explanation for the radio group.
     */
    description?: string;
    /**
     * Defines the direction of the main and cross axis. The default is 'column' showing options vertically stacked. You always need to provide a base value when using breakpoints.
     */
    direction?: BreakpointCustomizable<RadioGroupDirection>;
    /**
     * A boolean value that, if present, makes the radio group unusable and unclickable. The value will not be submitted with the form.
     */
    disabled?: boolean;
    /**
     * Specifies the id of the <form> element that the radio group belongs to (useful if the radio group is not a direct descendant of the form).
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
     * Dynamic feedback text for validation or status.
     */
    message?: string;
    /**
     * The name of the group of radio buttons, used when submitting the form data.
     */
    name: string;
    /**
     * A boolean value that specifies a selection must be made from the group before the form can be submitted.
     */
    required?: boolean;
    /**
     * Indicates the validation or overall status of the radio group component.
     */
    state?: RadioGroupState;
    /**
     * Controls the visual appearance of the component.
     */
    theme?: Theme;
    /**
     * The default value for the radio-group.
     */
    value?: string;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PRadioGroupProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    [x: string]: any;
}, string, import("vue").PublicProps, Readonly<PRadioGroupProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    label: string;
    compact: boolean;
    description: string;
    state: RadioGroupState;
    required: boolean;
    disabled: boolean;
    hideLabel: BreakpointCustomizable<boolean>;
    loading: boolean;
    value: string;
    direction: BreakpointCustomizable<RadioGroupDirection>;
    message: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
