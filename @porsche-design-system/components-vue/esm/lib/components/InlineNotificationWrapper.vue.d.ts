import type { InlineNotificationActionIcon, InlineNotificationHeadingTag, InlineNotificationState, Theme } from '../types';
type PInlineNotificationProps = {
    /**
     * Action icon of the inline-notification.
     */
    actionIcon?: InlineNotificationActionIcon;
    /**
     * Action label of the inline-notification.
     */
    actionLabel?: string;
    /**
     * Disables the action button and shows a loading indicator. No events will be triggered while loading state is active.
     */
    actionLoading?: boolean;
    /**
     * Description of the inline-notification.
     */
    description?: string;
    /**
     * If false, the inline-notification will not have a dismiss button.
     */
    dismissButton?: boolean;
    /**
     * Heading of the inline-notification.
     */
    heading?: string;
    /**
     * Sets a heading tag, so it fits correctly within the outline of the page.
     */
    headingTag?: InlineNotificationHeadingTag;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `dismissButton` instead. Defines if the inline-notification can be closed/removed by the user.
     */
    persistent?: boolean;
    /**
     * State of the inline-notification.
     */
    state?: InlineNotificationState;
    /**
     * Adapts the inline-notification color depending on the theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PInlineNotificationProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: any;
} & {
    [x: string]: any;
}, string, import("vue").PublicProps, Readonly<PInlineNotificationProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    heading: string;
    headingTag: InlineNotificationHeadingTag;
    description: string;
    dismissButton: boolean;
    state: InlineNotificationState;
    actionIcon: InlineNotificationActionIcon;
    actionLoading: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
