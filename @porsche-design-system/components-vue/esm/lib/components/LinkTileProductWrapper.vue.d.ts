import type { BreakpointCustomizable, LinkTileProductAspectRatio, LinkTileProductTarget, Theme } from '../types';
type PLinkTileProductProps = {
    /**
     * Aspect ratio of the link-tile-product.
     */
    aspectRatio?: BreakpointCustomizable<LinkTileProductAspectRatio>;
    /**
     * Additional product description.
     */
    description?: string;
    /**
     * Product heading.
     */
    heading: string;
    /**
     * href of the `<a>`.
     */
    href?: string;
    /**
     * A Boolean attribute indicating that a like button should be shown.
     */
    likeButton?: boolean;
    /**
     * A Boolean attribute indicating that a product is liked.
     */
    liked?: boolean;
    /**
     * Product retail price (with or without discount).
     */
    price: string;
    /**
     * Shows original price (recommended retail price) with line-through. Needs prop "price" to be defined, otherwise this prop has no effect.
     */
    priceOriginal?: string;
    /**
     * Specifies the relationship of the target object to the link object.
     */
    rel?: string;
    /**
     * Target attribute where the link should be opened.
     */
    target?: LinkTileProductTarget;
    /**
     * Adapts the link-tile-product color depending on the theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PLinkTileProductProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    like: (value: import("../types").LinkTileProductLikeEvent) => any;
}, string, import("vue").PublicProps, Readonly<PLinkTileProductProps> & Readonly<{
    onLike?: ((value: import("../types").LinkTileProductLikeEvent) => any) | undefined;
}>, {
    target: LinkTileProductTarget;
    aspectRatio: BreakpointCustomizable<LinkTileProductAspectRatio>;
    likeButton: boolean;
    liked: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
