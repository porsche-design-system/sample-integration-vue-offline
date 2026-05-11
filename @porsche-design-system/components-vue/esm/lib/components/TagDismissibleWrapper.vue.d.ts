import type { SelectedAriaAttributes, TagDismissibleAriaAttribute, TagDismissibleColor, Theme } from '../types';
type PTagDismissibleProps = {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<TagDismissibleAriaAttribute>;
    /**
     * Background color variations
     */
    color?: TagDismissibleColor;
    /**
     * A boolean value that, if present, renders the tag dismissible as a compact version.
     */
    compact?: boolean;
    /**
     * The label text.
     */
    label?: string;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PTagDismissibleProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PTagDismissibleProps> & Readonly<{}>, {
    compact: boolean;
    color: TagDismissibleColor;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
