import type { SelectedAriaAttributes, SegmentedControlItemAriaAttribute, SegmentedControlItemIcon } from '../types';
type PSegmentedControlItemProps = {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<SegmentedControlItemAriaAttribute>;
    /**
     * Disables the button. No events will be triggered while disabled state is active.
     */
    disabled?: boolean;
    /**
     * The icon shown.
     */
    icon?: SegmentedControlItemIcon;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string;
    /**
     * The label text.
     */
    label?: string;
    /**
     * The value of this item which is emitted by the parent element if it becomes selected. This property is **required**.
     */
    value: string | number;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PSegmentedControlItemProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PSegmentedControlItemProps> & Readonly<{}>, {
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
