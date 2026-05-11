import type { BreakpointCustomizable, LinkTileModelSignatureAspectRatio, LinkTileModelSignatureHeadingTag, LinkTileModelSignatureLinkDirection, LinkTileModelSignatureModel, LinkTileModelSignatureWeight } from '../types';
type PLinkTileModelSignatureProps = {
    /**
     * Aspect ratio of the link-tile-model-signature.
     */
    aspectRatio?: BreakpointCustomizable<LinkTileModelSignatureAspectRatio>;
    /**
     * Description text.
     */
    description?: string;
    /**
     * Heading text.
     */
    heading: string;
    /**
     * Sets a heading tag, so it fits correctly within the outline of the page.
     */
    headingTag?: LinkTileModelSignatureHeadingTag;
    /**
     * Defines the direction of the main and cross axis of the links. The default is '{base: ‘column’, xs: ‘row’}' showing buttons vertically stacked on mobile viewports and side-by-side in a horizontal row from breakpoint 'xs'.
     */
    linkDirection?: BreakpointCustomizable<LinkTileModelSignatureLinkDirection>;
    /**
     * Adapts the model of the component.
     */
    model?: LinkTileModelSignatureModel;
    /**
     * Adapts the font weight of the heading.
     */
    weight?: BreakpointCustomizable<LinkTileModelSignatureWeight>;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PLinkTileModelSignatureProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PLinkTileModelSignatureProps> & Readonly<{}>, {
    weight: BreakpointCustomizable<LinkTileModelSignatureWeight>;
    headingTag: LinkTileModelSignatureHeadingTag;
    aspectRatio: BreakpointCustomizable<LinkTileModelSignatureAspectRatio>;
    linkDirection: BreakpointCustomizable<LinkTileModelSignatureLinkDirection>;
    model: LinkTileModelSignatureModel;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
