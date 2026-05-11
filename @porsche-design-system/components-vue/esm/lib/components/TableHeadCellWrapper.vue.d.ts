import type { TableHeadCellSort } from '../types';
type PTableHeadCellProps = {
    /**
     * Hides the label but stays accessible for screen readers. This property only takes effect when sort property is not defined.
     */
    hideLabel?: boolean;
    /**
     * Displays slotted text multiline or forced into a single line.
     */
    multiline?: boolean;
    /**
     * Defines sortability properties.
     */
    sort?: TableHeadCellSort;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PTableHeadCellProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PTableHeadCellProps> & Readonly<{}>, {
    hideLabel: boolean;
    multiline: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
