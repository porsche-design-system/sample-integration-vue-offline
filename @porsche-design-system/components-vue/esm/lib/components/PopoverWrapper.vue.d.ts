import type { SelectedAriaAttributes, PopoverAriaAttribute, PopoverDirection, Theme } from '../types';
type PPopoverProps = {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<PopoverAriaAttribute>;
    /**
     * Descriptive text to show additional information when popover is open
     */
    description?: string;
    /**
     * Preferred direction in which popover should open, given there is enough space in viewport. Otherwise, it will be opened in the direction with most available space.
     */
    direction?: PopoverDirection;
    /**
     * Adapts the popover color depending on the theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PPopoverProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PPopoverProps> & Readonly<{}>, {
    direction: PopoverDirection;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
