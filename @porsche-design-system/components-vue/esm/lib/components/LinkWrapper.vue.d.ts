import type { SelectedAriaAttributes, LinkAriaAttribute, BreakpointCustomizable, LinkIcon, LinkTarget, Theme, LinkVariant } from '../types';
type PLinkProps = {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<LinkAriaAttribute>;
    /**
     * Displays as compact version.
     */
    compact?: BreakpointCustomizable<boolean>;
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
     * The icon shown. By choosing 'none', no icon is displayed.
     */
    icon?: LinkIcon;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string;
    /**
     * Specifies the relationship of the target object to the link object.
     */
    rel?: string;
    /**
     * Target attribute where the link should be opened.
     */
    target?: LinkTarget;
    /**
     * Adapts the link color when used on dark background.
     */
    theme?: Theme;
    /**
     * The style variant of the link.
     */
    variant?: LinkVariant;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PLinkProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PLinkProps> & Readonly<{}>, {
    compact: BreakpointCustomizable<boolean>;
    target: LinkTarget;
    hideLabel: BreakpointCustomizable<boolean>;
    icon: LinkIcon;
    variant: LinkVariant;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
