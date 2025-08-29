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
declare const __VLS_component: import("vue").DefineComponent<PTagDismissibleProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PTagDismissibleProps> & Readonly<{}>, {
    color: TagDismissibleColor;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
