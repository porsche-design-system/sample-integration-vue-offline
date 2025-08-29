import type { ButtonTileAlign, SelectedAriaAttributes, ButtonTileAriaAttribute, BreakpointCustomizable, ButtonTileAspectRatio, ButtonTileBackground, ButtonTileIcon, ButtonTileSize, ButtonTileType, ButtonTileWeight } from '../types';
type PButtonTileProps = {
    /**
     * Alignment of button and description.
     */
    align?: ButtonTileAlign;
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<ButtonTileAriaAttribute>;
    /**
     * Aspect ratio of the button-tile.
     */
    aspectRatio?: BreakpointCustomizable<ButtonTileAspectRatio>;
    /**
     * Adapts the description and button theme when used on light background image.
     */
    background?: ButtonTileBackground;
    /**
     * Displays the button-tile as compact version with description and button icon only.
     */
    compact?: BreakpointCustomizable<boolean>;
    /**
     * Description text.
     */
    description: string;
    /**
     * Disables the button. No events will be triggered while disabled state is active.
     */
    disabled?: boolean;
    /**
     * Show gradient.
     */
    gradient?: boolean;
    /**
     * The icon shown. By choosing 'none', no icon is displayed.
     */
    icon?: ButtonTileIcon;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string;
    /**
     * Label of the button.
     */
    label: string;
    /**
     * Disables the button-tile and shows a loading indicator. No events will be triggered while loading state is active.
     */
    loading?: boolean;
    /**
     * Font size of the description.
     */
    size?: BreakpointCustomizable<ButtonTileSize>;
    /**
     * Specifies the type of the button.
     */
    type?: ButtonTileType;
    /**
     * Font weight of the description.
     */
    weight?: BreakpointCustomizable<ButtonTileWeight>;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PButtonTileProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PButtonTileProps> & Readonly<{}>, {
    weight: BreakpointCustomizable<ButtonTileWeight>;
    type: ButtonTileType;
    compact: BreakpointCustomizable<boolean>;
    size: BreakpointCustomizable<ButtonTileSize>;
    disabled: boolean;
    icon: ButtonTileIcon;
    loading: boolean;
    align: ButtonTileAlign;
    aspectRatio: BreakpointCustomizable<ButtonTileAspectRatio>;
    background: ButtonTileBackground;
    gradient: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
