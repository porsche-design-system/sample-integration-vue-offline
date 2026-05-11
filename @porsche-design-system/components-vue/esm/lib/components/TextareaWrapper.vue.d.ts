import type { BreakpointCustomizable, TextareaResize, TextareaState, Theme, TextareaWrap } from '../types';
type PTextareaProps = {
    /**
     * Provides a hint to the browser about what type of data the field expects, which can assist with autofill features (e.g., autocomplete='on').
     */
    autoComplete?: string;
    /**
     * A boolean value that, if present, renders the textarea as a compact version.
     */
    compact?: boolean;
    /**
     * Show or hide the character counter.
     */
    counter?: boolean;
    /**
     * Supplementary text providing more context or explanation for the textarea.
     */
    description?: string;
    /**
     * A boolean value that, if present, makes the textarea unusable and unclickable. The value will not be submitted with the form.
     */
    disabled?: boolean;
    /**
     * Specifies the id of the <form> element that the textarea belongs to (useful if the textarea is not a direct descendant of the form).
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
     * A non-negative integer specifying the maximum number of characters the user can enter into the textarea.
     */
    maxLength?: number;
    /**
     * Dynamic feedback text for validation or status.
     */
    message?: string;
    /**
     * A non-negative integer specifying the minimum number of characters required for the textarea's value to be considered valid.
     */
    minLength?: number;
    /**
     * The name of the textarea, used when submitting the form data.
     */
    name: string;
    /**
     * A string that provides a brief hint to the user about what kind of information is expected in the field (e.g., placeholder='Write your message here...'). This text is displayed when the textarea is empty.
     */
    placeholder?: string;
    /**
     * A boolean value that, if present, makes the textarea uneditable by the user, but its value will still be submitted with the form.
     */
    readOnly?: boolean;
    /**
     * A boolean value that, if present, indicates that the textarea must be filled out before the form can be submitted.
     */
    required?: boolean;
    /**
     * Controls whether the textarea is resizable and in which direction.
     */
    resize?: TextareaResize;
    /**
     * The number of rows. Has no effect when field-sizing CSS Variable '--p-textarea-field-sizing' is set to 'content'.
     */
    rows?: number;
    /**
     * Specifies whether the textarea should have its spelling and grammar checked
     */
    spellCheck?: boolean;
    /**
     * Indicates the validation or overall status of the textarea component.
     */
    state?: TextareaState;
    /**
     * Controls the visual appearance of the component.
     */
    theme?: Theme;
    /**
     * The textarea value.
     */
    value?: string;
    /**
     * Handles wrapping behavior of elements.
     */
    wrap?: TextareaWrap;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PTextareaProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    blur: (value: Event) => any;
    change: (value: Event) => any;
    input: (value: InputEvent) => any;
    "update:value": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<PTextareaProps> & Readonly<{
    onBlur?: ((value: Event) => any) | undefined;
    onChange?: ((value: Event) => any) | undefined;
    onInput?: ((value: InputEvent) => any) | undefined;
    "onUpdate:value"?: ((value: string) => any) | undefined;
}>, {
    wrap: TextareaWrap;
    resize: TextareaResize;
    label: string;
    compact: boolean;
    placeholder: string;
    description: string;
    state: TextareaState;
    required: boolean;
    disabled: boolean;
    hideLabel: BreakpointCustomizable<boolean>;
    value: string;
    message: string;
    readOnly: boolean;
    counter: boolean;
    rows: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
