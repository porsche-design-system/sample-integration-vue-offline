import type { TagColor, TagIcon, Theme, TagVariant } from '../types';
type PTagProps = {
    /**
     * @deprecated since v3.33.0, will be removed with next major release. Use `variant` prop instead. Background color variations depending on theme property.
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
    /**
     * Background color variations.
     */
    variant?: TagVariant;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PTagProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PTagProps> & Readonly<{}>, {
    compact: boolean;
    color: TagColor;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
