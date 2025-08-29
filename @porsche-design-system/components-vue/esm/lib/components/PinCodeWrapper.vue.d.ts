import type { BreakpointCustomizable, PinCodeLength, PinCodeState, Theme, PinCodeType } from '../types';
type PPinCodeProps = {
    /**
     * The description text.
     */
    description?: string;
    /**
     * Disables the Pin Code. No events will be triggered while disabled state is active.
     */
    disabled?: boolean;
    /**
     * The id of a form element the pin-code should be associated with.
     */
    form?: string;
    /**
     * Show or hide label and description text. For better accessibility it is recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * The label text.
     */
    label?: string;
    /**
     * Number of characters of the Pin Code.
     */
    length?: PinCodeLength;
    /**
     * Disables the Pin Code and shows a loading indicator. No events will be triggered while loading state is active.
     */
    loading?: boolean;
    /**
     * The message styled depending on validation state.
     */
    message?: string;
    /**
     * Name of the control.
     */
    name?: string;
    /**
     * Marks the Pin Code as required.
     */
    required?: boolean;
    /**
     * The validation state.
     */
    state?: PinCodeState;
    /**
     * Adapts the color depending on the theme.
     */
    theme?: Theme;
    /**
     * Pin Code type.
     */
    type?: PinCodeType;
    /**
     * Sets the initial value of the Pin Code.
     */
    value?: string;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PPinCodeProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    update: (value: import("../types").PinCodeUpdateEvent) => any;
}, string, import("vue").PublicProps, Readonly<PPinCodeProps> & Readonly<{
    onUpdate?: ((value: import("../types").PinCodeUpdateEvent) => any) | undefined;
}>, {
    label: string;
    length: PinCodeLength;
    type: PinCodeType;
    description: string;
    state: PinCodeState;
    required: boolean;
    disabled: boolean;
    hideLabel: BreakpointCustomizable<boolean>;
    loading: boolean;
    value: string;
    message: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
