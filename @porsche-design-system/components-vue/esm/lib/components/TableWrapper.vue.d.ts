import type { TableLayout, Theme } from '../types';
type PTableProps = {
    /**
     * A caption describing the contents of the table for accessibility only. This won't be visible in the browser. Use an element with an attribute of `slot="caption"` for a visible caption.
     */
    caption?: string;
    /**
     * Displays as compact version.
     */
    compact?: boolean;
    /**
     * Controls the layout behavior of the table.
     */
    layout?: TableLayout;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PTableProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    update: (value: import("../types").TableHeadCellSort) => any;
    sortingChange: (value: import("../types").TableHeadCellSort) => any;
}, string, import("vue").PublicProps, Readonly<PTableProps> & Readonly<{
    onUpdate?: ((value: import("../types").TableHeadCellSort) => any) | undefined;
    onSortingChange?: ((value: import("../types").TableHeadCellSort) => any) | undefined;
}>, {
    compact: boolean;
    layout: TableLayout;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
