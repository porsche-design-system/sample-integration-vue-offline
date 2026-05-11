import type { ScrollerAlignScrollIndicator, SelectedAriaAttributes, ScrollerAriaAttribute, ScrollerGradientColor, ScrollerGradientColorScheme, ScrollerScrollIndicatorPosition, ScrollerScrollToPosition, Theme } from '../types';
type PScrollerProps = {
    /**
     * Sets the vertical position of scroll indicator.
     */
    alignScrollIndicator?: ScrollerAlignScrollIndicator;
    /**
     * Add ARIA role.
     */
    aria?: SelectedAriaAttributes<ScrollerAriaAttribute>;
    /**
     * @deprecated since v3.29.0, will be removed with next major release. Adapts the background gradient color of prev and next button.
     */
    gradientColor?: ScrollerGradientColor;
    /**
     * @deprecated since v3.0.0, will be removed with next major release. Adapts the background gradient color of prev and next button.
     */
    gradientColorScheme?: ScrollerGradientColorScheme;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `alignScrollIndicator` instead. Sets the vertical position of scroll indicator
     */
    scrollIndicatorPosition?: ScrollerScrollIndicatorPosition;
    /**
     * Scrolls the scroll area to the left either smooth or immediately.
     */
    scrollToPosition?: ScrollerScrollToPosition;
    /**
     * Specifies if scrollbar should be shown.
     */
    scrollbar?: boolean;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PScrollerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PScrollerProps> & Readonly<{}>, {
    scrollbar: boolean;
    alignScrollIndicator: ScrollerAlignScrollIndicator;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
