import type { SelectedAriaAttributes, ModalAriaAttribute, ModalBackdrop, BreakpointCustomizable, Theme } from '../types';
type PModalProps = {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<ModalAriaAttribute>;
    /**
     * Defines the backdrop, 'blur' (should be used when Modal is opened by user interaction, e.g. after a click on a button) and 'shading' (should be used when Modal gets opened automatically, e.g. Cookie Consent).
     */
    backdrop?: ModalBackdrop;
    /**
     * If true, the modal will not be closable via backdrop click.
     */
    disableBackdropClick?: boolean;
    /**
     * If true, the modal will not have a dismiss button.
     * @deprecated since v3.0.0, will be removed with next major release, use `dismissButton` instead.
     */
    disableCloseButton?: boolean;
    /**
     * If false, the modal will not have a dismiss button.
     */
    dismissButton?: boolean;
    /**
     * If true the modal uses max viewport height and width. Should only be used for mobile.
     */
    fullscreen?: BreakpointCustomizable<boolean>;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `header` slot instead The title of the modal
     */
    heading?: string;
    /**
     * If true, the modal is open.
     */
    open: boolean;
    /**
     * Adapts the modal color depending on the theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PModalProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: any;
} & {
    [x: string]: any;
}, string, import("vue").PublicProps, Readonly<PModalProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    open: boolean;
    dismissButton: boolean;
    disableBackdropClick: boolean;
    backdrop: ModalBackdrop;
    fullscreen: BreakpointCustomizable<boolean>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
