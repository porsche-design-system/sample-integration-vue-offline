import type { SegmentedControlBackgroundColor, BreakpointCustomizable, SegmentedControlColumns, Theme } from '../types';
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
     * Disables the segmented-control.
     */
    disabled?: boolean;
    /**
     * The id of a form element the segmented-control should be associated with.
     */
    form?: string;
    /**
     * The name of the segmented-control.
     */
    name?: string;
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
declare const __VLS_component: import("vue").DefineComponent<PSegmentedControlProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    update: (value: import("../types").SegmentedControlUpdateEvent) => any;
    segmentedControlChange: (value: import("../types").SegmentedControlUpdateEvent) => any;
}, string, import("vue").PublicProps, Readonly<PSegmentedControlProps> & Readonly<{
    onUpdate?: ((value: import("../types").SegmentedControlUpdateEvent) => any) | undefined;
    onSegmentedControlChange?: ((value: import("../types").SegmentedControlUpdateEvent) => any) | undefined;
}>, {
    disabled: boolean;
    columns: BreakpointCustomizable<SegmentedControlColumns>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
