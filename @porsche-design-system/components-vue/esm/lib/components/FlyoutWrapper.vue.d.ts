import type { SelectedAriaAttributes, FlyoutAriaAttribute, FlyoutBackdrop, FlyoutFooterBehavior, FlyoutPosition, Theme } from '../types';
type PFlyoutProps = {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<FlyoutAriaAttribute>;
    /**
     * Defines the backdrop, 'blur' (should be used when the underlying content is not relevant for users) and 'shading' (should be used when the user still needs a visual connection to the underlying content).
     */
    backdrop?: FlyoutBackdrop;
    /**
     * If true, the flyout will not be closable via backdrop click.
     */
    disableBackdropClick?: boolean;
    /**
     * Determines the footer's position behavior. When set to "fixed," the flyout content stretches to fill the full height, keeping the footer permanently at the bottom. When set to "sticky," the footer flows beneath the content and only becomes fixed if the content overflows.
     */
    footerBehavior?: FlyoutFooterBehavior;
    /**
     * If true, the flyout is open.
     */
    open: boolean;
    /**
     * The position of the flyout
     */
    position?: FlyoutPosition;
    /**
     * Adapts the flyout color depending on the theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PFlyoutProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    [x: string]: any;
}, string, import("vue").PublicProps, Readonly<PFlyoutProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    open: boolean;
    backdrop: FlyoutBackdrop;
    disableBackdropClick: boolean;
    footerBehavior: FlyoutFooterBehavior;
    position: FlyoutPosition;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
