import type { LinkTileAlign, SelectedAriaAttributes, LinkTileAriaAttribute, BreakpointCustomizable, LinkTileAspectRatio, LinkTileBackground, LinkTileSize, LinkTileTarget, LinkTileWeight } from '../types';
type PLinkTileProps = {
    /**
     * Alignment of link and description.
     */
    align?: LinkTileAlign;
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<LinkTileAriaAttribute>;
    /**
     * Aspect ratio of the link-tile.
     */
    aspectRatio?: BreakpointCustomizable<LinkTileAspectRatio>;
    /**
     * Adapts the description and link theme when used on light background image.
     */
    background?: LinkTileBackground;
    /**
     * Displays the link-tile as compact version with description and link icon only.
     */
    compact?: BreakpointCustomizable<boolean>;
    /**
     * Description text.
     */
    description: string;
    /**
     * Special download attribute to open native browser download dialog if target url points to a downloadable file.
     */
    download?: string;
    /**
     * Show gradient.
     */
    gradient?: boolean;
    /**
     * href of the `<a>`.
     */
    href: string;
    /**
     * Label of the <a />.
     */
    label: string;
    /**
     * Specifies the relationship of the target object to the link object.
     */
    rel?: string;
    /**
     * Font size of the description.
     */
    size?: BreakpointCustomizable<LinkTileSize>;
    /**
     * Target attribute where the link should be opened.
     */
    target?: LinkTileTarget;
    /**
     * Font weight of the description.
     */
    weight?: BreakpointCustomizable<LinkTileWeight>;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PLinkTileProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PLinkTileProps> & Readonly<{}>, {
    weight: BreakpointCustomizable<LinkTileWeight>;
    compact: BreakpointCustomizable<boolean>;
    size: BreakpointCustomizable<LinkTileSize>;
    target: LinkTileTarget;
    align: LinkTileAlign;
    aspectRatio: BreakpointCustomizable<LinkTileAspectRatio>;
    background: LinkTileBackground;
    gradient: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
