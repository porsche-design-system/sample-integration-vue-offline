import type { BannerHeadingTag, BannerState, Theme, BannerWidth } from '../types';
type PBannerProps = {
    /**
     * Description of the banner.
     */
    description?: string;
    /**
     * If false, the banner will not have a dismiss button.
     */
    dismissButton?: boolean;
    /**
     * Heading of the banner.
     */
    heading?: string;
    /**
     * Sets a heading tag, so it fits correctly within the outline of the page.
     */
    headingTag?: BannerHeadingTag;
    /**
     * If true, the banner is open.
     */
    open: boolean;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `dismissButton` instead. Defines if the banner can be closed/removed by the user.
     */
    persistent?: boolean;
    /**
     * State of the banner.
     */
    state?: BannerState;
    /**
     * Adapts the banner color depending on the theme.
     */
    theme?: Theme;
    /**
     * Has no effect anymore
     * @deprecated since v3.0.0, will be removed with next major release
     */
    width?: BannerWidth;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PBannerProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: any;
} & {
    [x: string]: any;
}, string, import("vue").PublicProps, Readonly<PBannerProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    heading: string;
    headingTag: BannerHeadingTag;
    open: boolean;
    description: string;
    dismissButton: boolean;
    state: BannerState;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
