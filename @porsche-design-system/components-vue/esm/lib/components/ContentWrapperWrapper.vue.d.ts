import type { ContentWrapperBackgroundColor, Theme, ContentWrapperWidth } from '../types';
type PContentWrapperProps = {
    /**
     * Has no effect anymore
     * @deprecated since v3.0.0, will be removed with next major release
     */
    backgroundColor?: ContentWrapperBackgroundColor;
    /**
     * Has no effect anymore
     * @deprecated since v3.0.0, will be removed with next major release
     */
    theme?: Theme;
    /**
     * Defines the outer spacings between the content area and the left and right screen sides, as well as centering its content and setting a max-width.
     */
    width?: ContentWrapperWidth;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PContentWrapperProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PContentWrapperProps> & Readonly<{}>, {
    width: ContentWrapperWidth;
    backgroundColor: ContentWrapperBackgroundColor;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Grid instead. */
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
