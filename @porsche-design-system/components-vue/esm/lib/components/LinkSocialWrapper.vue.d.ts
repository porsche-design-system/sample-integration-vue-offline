import type { BreakpointCustomizable, LinkSocialIcon, LinkSocialTarget, Theme } from '../types';
type PLinkSocialProps = {
    /**
     * Displays as compact version.
     */
    compact?: boolean;
    /**
     * Show or hide label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * When providing an url then the component will be rendered as `<a>`.
     */
    href?: string;
    /**
     * The icon shown.
     */
    icon?: LinkSocialIcon;
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
    target?: LinkSocialTarget;
    /**
     * Adapts the link color when used on dark background.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PLinkSocialProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PLinkSocialProps> & Readonly<{}>, {
    compact: boolean;
    target: LinkSocialTarget;
    hideLabel: BreakpointCustomizable<boolean>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
/** @deprecated since v3.0.0, will be removed with next major release. Use `p-link` with corresponding social icon instead. */
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
