import type { SelectWrapperDropdownDirection, BreakpointCustomizable, SelectWrapperState, Theme } from '../types';
type PSelectWrapperProps = {
    /**
     * The description text.
     */
    description?: string;
    /**
     * Changes the direction to which the dropdown list appears.
     */
    dropdownDirection?: SelectWrapperDropdownDirection;
    /**
     * Filters select options by typing a character
     */
    filter?: boolean;
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
     * Forces rendering of native browser select dropdown
     */
    native?: boolean;
    /**
     * The validation state.
     */
    state?: SelectWrapperState;
    /**
     * Adapts the select color depending on the theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PSelectWrapperProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PSelectWrapperProps> & Readonly<{}>, {
    filter: boolean;
    label: string;
    description: string;
    state: SelectWrapperState;
    hideLabel: BreakpointCustomizable<boolean>;
    message: string;
    dropdownDirection: SelectWrapperDropdownDirection;
    native: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
/** @deprecated since v3.29.0, will be removed with next major release. Please use `p-select` instead. */
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
