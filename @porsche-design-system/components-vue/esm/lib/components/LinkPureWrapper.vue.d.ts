import type { BreakpointCustomizable, LinkPureAlignLabel, SelectedAriaAttributes, LinkPureAriaAttribute, LinkPureIcon, LinkPureSize, LinkPureTarget, Theme, LinkPureWeight } from '../types';
type PLinkPureProps = {
    /**
     * Display link in active state.
     */
    active?: boolean;
    /**
     * Aligns the label.
     */
    alignLabel?: BreakpointCustomizable<LinkPureAlignLabel>;
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<LinkPureAriaAttribute>;
    /**
     * Special download attribute to open native browser download dialog if target url points to a downloadable file.
     */
    download?: string;
    /**
     * Show or hide label. For better accessibility it is recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * When providing an url then the component will be rendered as `<a>`.
     */
    href?: string;
    /**
     * The icon shown. By choosing 'none', no icon is displayed
     */
    icon?: LinkPureIcon;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string;
    /**
     * Specifies the relationship of the target object to the link object.
     */
    rel?: string;
    /**
     * Size of the link.
     */
    size?: BreakpointCustomizable<LinkPureSize>;
    /**
     * Stretches the area between icon and label to max available space.
     */
    stretch?: BreakpointCustomizable<boolean>;
    /**
     * Target attribute where the link should be opened.
     */
    target?: LinkPureTarget;
    /**
     * Adapts the button color depending on the theme.
     */
    theme?: Theme;
    /**
     * Shows an underline under the label.
     */
    underline?: boolean;
    /**
     * The weight of the text (only has effect with visible label).
     * @deprecated since v3.0.0, will be removed with next major release
     */
    weight?: LinkPureWeight;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PLinkPureProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PLinkPureProps> & Readonly<{}>, {
    weight: LinkPureWeight;
    stretch: BreakpointCustomizable<boolean>;
    size: BreakpointCustomizable<LinkPureSize>;
    target: LinkPureTarget;
    hideLabel: BreakpointCustomizable<boolean>;
    icon: LinkPureIcon;
    active: boolean;
    alignLabel: BreakpointCustomizable<LinkPureAlignLabel>;
    underline: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
