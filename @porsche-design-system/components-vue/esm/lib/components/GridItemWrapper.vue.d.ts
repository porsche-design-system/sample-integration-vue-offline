import type { BreakpointCustomizable, GridItemOffset, GridItemSize } from '../types';
type PGridItemProps = {
    /**
     * The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
     */
    offset?: BreakpointCustomizable<GridItemOffset>;
    /**
     * The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
     */
    size?: BreakpointCustomizable<GridItemSize>;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PGridItemProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PGridItemProps> & Readonly<{}>, {
    size: BreakpointCustomizable<GridItemSize>;
    offset: BreakpointCustomizable<GridItemOffset>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
/** @deprecated since v3.0.0, will be removed with next major release. Use native CSS Grid instead. */
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
