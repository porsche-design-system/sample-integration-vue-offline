import type { TagColor, TagIcon, Theme } from '../types';
type PTagProps = {
    /**
     * Background color variations depending on theme property.
     */
    color?: TagColor;
    /**
     * Displays as compact version.
     */
    compact?: boolean;
    /**
     * The icon shown.
     */
    icon?: TagIcon;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string;
    /**
     * Adapts the tag color depending on the theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PTagProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PTagProps> & Readonly<{}>, {
    compact: boolean;
    color: TagColor;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
