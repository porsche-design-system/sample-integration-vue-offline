import type { CarouselAlignControls, CarouselAlignHeader, SelectedAriaAttributes, CarouselAriaAttribute, BreakpointCustomizable, CarouselGradientColor, CarouselHeadingSize, CarouselInternationalization, CarouselSlidesPerPage, Theme, CarouselWidth } from '../types';
type PCarouselProps = {
    /**
     * Defines which slide to be active (zero-based numbering).
     */
    activeSlideIndex?: number;
    /**
     * Alignment of slotted controls
     */
    alignControls?: CarouselAlignControls;
    /**
     * Alignment of heading and description
     */
    alignHeader?: CarouselAlignHeader;
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<CarouselAriaAttribute>;
    /**
     * Defines the description used in the carousel.
     */
    description?: string;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `pagination` instead. If true, the carousel will not show pagination bullets at the bottom.
     */
    disablePagination?: BreakpointCustomizable<boolean>;
    /**
     * Indicates whether focus should be set on the center slide. If true, the carousel loops by individual slide; otherwise, it loops by page.
     */
    focusOnCenterSlide?: boolean;
    /**
     * Adapts the background gradient for the left and right edge.
     */
    gradientColor?: CarouselGradientColor;
    /**
     * Defines the heading used in the carousel.
     */
    heading?: string;
    /**
     * Defines the heading size used in the carousel.
     */
    headingSize?: CarouselHeadingSize;
    /**
     * Override the default wordings that are used for aria-labels on the next/prev buttons and pagination.
     */
    intl?: CarouselInternationalization;
    /**
     * If false, the carousel will not show pagination bullets at the bottom.
     */
    pagination?: BreakpointCustomizable<boolean>;
    /**
     * Whether the slides should rewind from last to first slide and vice versa.
     */
    rewind?: boolean;
    /**
     * Defines target of skip link (to skip carousel entries).
     */
    skipLinkTarget?: string;
    /**
     * Sets the amount of slides visible at the same time. Can be set to `auto` if you want to define different widths per slide via CSS.
     */
    slidesPerPage?: BreakpointCustomizable<CarouselSlidesPerPage>;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
    /**
     * Determines whether to trim spaces before/after the carousel if `focusOnCenterSlide` option is true.
     */
    trimSpace?: boolean;
    /**
     * Defines the outer spacings between the carousel and the left and right screen sides.
     */
    width?: CarouselWidth;
    /**
     * Has no effect anymore
     * @deprecated since v3.0.0, will be removed with next major release
     */
    wrapContent?: boolean;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PCarouselProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    update: (value: import("../types").CarouselUpdateEvent) => any;
    carouselChange: (value: import("../types").CarouselUpdateEvent) => any;
}, string, import("vue").PublicProps, Readonly<PCarouselProps> & Readonly<{
    onUpdate?: ((value: import("../types").CarouselUpdateEvent) => any) | undefined;
    onCarouselChange?: ((value: import("../types").CarouselUpdateEvent) => any) | undefined;
}>, {
    width: CarouselWidth;
    activeSlideIndex: number;
    alignControls: CarouselAlignControls;
    alignHeader: CarouselAlignHeader;
    focusOnCenterSlide: boolean;
    gradientColor: CarouselGradientColor;
    headingSize: CarouselHeadingSize;
    pagination: BreakpointCustomizable<boolean>;
    rewind: boolean;
    slidesPerPage: BreakpointCustomizable<CarouselSlidesPerPage>;
    trimSpace: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
