import type { SelectedAriaAttributes, SheetAriaAttribute, Theme } from '../types';
type PSheetProps = {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<SheetAriaAttribute>;
    /**
     * If true, the sheet will not be closable via backdrop click.
     */
    disableBackdropClick?: boolean;
    /**
     * If false, the sheet will not have a dismiss button.
     */
    dismissButton?: boolean;
    /**
     * If true, the sheet is open.
     */
    open: boolean;
    /**
     * Adapts the sheet color depending on the theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PSheetProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: any;
} & {
    [x: string]: any;
}, string, import("vue").PublicProps, Readonly<PSheetProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    open: boolean;
    dismissButton: boolean;
    disableBackdropClick: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
