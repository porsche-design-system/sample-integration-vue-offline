import type { TextListListType, TextListOrderType, Theme, TextListType } from '../types';
type PTextListProps = {
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `type` instead. The type of the list.
     */
    listType?: TextListListType;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `type` instead. The list style type of ordered list. Only has effect when list type is set to 'ordered'.
     */
    orderType?: TextListOrderType;
    /**
     * Adapts the text color depending on the theme.
     */
    theme?: Theme;
    /**
     * The list style type.
     */
    type?: TextListType;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PTextListProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PTextListProps> & Readonly<{}>, {
    type: TextListType;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
