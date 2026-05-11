import type { SegmentedControlBackgroundColor, BreakpointCustomizable, SegmentedControlColumns, SegmentedControlState, Theme } from '../types';
type PSegmentedControlProps = {
    /**
     * @deprecated since v3.0.0, will be removed with next major release. Background color variations
     */
    backgroundColor?: SegmentedControlBackgroundColor;
    /**
     * Sets the amount of columns.
     */
    columns?: BreakpointCustomizable<SegmentedControlColumns>;
    /**
     * A boolean value that, if present, renders the segmented-control as a compact version.
     */
    compact?: boolean;
    /**
     * Supplementary text providing more context or explanation for the segmented-control.
     */
    description?: string;
    /**
     * Disables the segmented-control.
     */
    disabled?: boolean;
    /**
     * The id of a form element the segmented-control should be associated with.
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
     * Dynamic feedback text for validation or status.
     */
    message?: string;
    /**
     * The name of the segmented-control.
     */
    name?: string;
    /**
     * If true, prevents items from wrapping to new rows and renders them in a single scrollable row instead.
     */
    noWrap?: boolean;
    /**
     * A boolean value that specifies a selection must be made from the group before the form can be submitted.
     */
    required?: boolean;
    /**
     * Indicates the validation or overall status of the component.
     */
    state?: SegmentedControlState;
    /**
     * Adapts the segmented-control color depending on the theme.
     */
    theme?: Theme;
    /**
     * Sets the initial value of the segmented-control.
     */
    value?: string | number;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PSegmentedControlProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    [x: string]: any;
}, string, import("vue").PublicProps, Readonly<PSegmentedControlProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    label: string;
    compact: boolean;
    description: string;
    state: SegmentedControlState;
    required: boolean;
    disabled: boolean;
    hideLabel: BreakpointCustomizable<boolean>;
    message: string;
    columns: BreakpointCustomizable<SegmentedControlColumns>;
    noWrap: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
