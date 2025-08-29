import type { SelectDropdownDirection, BreakpointCustomizable, SelectUpdateEventDetail, SelectState, Theme } from '../types';
type PSelectProps = {
    /**
     * Displays as compact version.
     */
    compact?: boolean;
    /**
     * The description text.
     */
    description?: string;
    /**
     * Disables the select.
     */
    disabled?: boolean;
    /**
     * Changes the direction to which the dropdown list appears.
     */
    dropdownDirection?: SelectDropdownDirection;
    /**
     * Shows an input in the dropdown allowing options to be filtered.
     */
    filter?: boolean;
    /**
     * The id of a form element the select should be associated with.
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
    state?: SelectState;
    /**
     * Adapts the select color depending on the theme.
     */
    theme?: Theme;
    /**
     * The selected value.
     */
    value?: string;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PSelectProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    update: (value: SelectUpdateEventDetail) => any;
}, string, import("vue").PublicProps, Readonly<PSelectProps> & Readonly<{
    onUpdate?: ((value: SelectUpdateEventDetail) => any) | undefined;
}>, {
    filter: boolean;
    label: string;
    compact: boolean;
    description: string;
    state: SelectState;
    required: boolean;
    disabled: boolean;
    hideLabel: BreakpointCustomizable<boolean>;
    message: string;
    dropdownDirection: SelectDropdownDirection;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
