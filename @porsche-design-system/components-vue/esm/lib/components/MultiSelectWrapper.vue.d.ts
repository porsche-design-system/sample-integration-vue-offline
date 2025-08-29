import type { MultiSelectDropdownDirection, BreakpointCustomizable, MultiSelectState, Theme } from '../types';
type PMultiSelectProps = {
    /**
     * Displays as compact version.
     */
    compact?: boolean;
    /**
     * The description text.
     */
    description?: string;
    /**
     * Disables the multi-select
     */
    disabled?: boolean;
    /**
     * Changes the direction to which the dropdown list appears.
     */
    dropdownDirection?: MultiSelectDropdownDirection;
    /**
     * The id of a form element the multi-select should be associated with.
     */
    form?: string;
    /**
     * Show or hide label. For better accessibility it is recommended to show the label.
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
     * The name of the control.
     */
    name: string;
    /**
     * A Boolean attribute indicating that an option with a non-empty string value must be selected.
     */
    required?: boolean;
    /**
     * The validation state.
     */
    state?: MultiSelectState;
    /**
     * Adapts the multi-select color depending on the theme.
     */
    theme?: Theme;
    /**
     * The selected values.
     */
    value?: string[];
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PMultiSelectProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    update: (value: import("../types").MultiSelectUpdateEvent) => any;
}, string, import("vue").PublicProps, Readonly<PMultiSelectProps> & Readonly<{
    onUpdate?: ((value: import("../types").MultiSelectUpdateEvent) => any) | undefined;
}>, {
    label: string;
    compact: boolean;
    description: string;
    state: MultiSelectState;
    required: boolean;
    disabled: boolean;
    hideLabel: BreakpointCustomizable<boolean>;
    value: string[];
    message: string;
    dropdownDirection: MultiSelectDropdownDirection;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
