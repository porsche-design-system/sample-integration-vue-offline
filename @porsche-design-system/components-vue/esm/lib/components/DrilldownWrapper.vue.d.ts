import type { SelectedAriaAttributes, DrilldownAriaAttribute, Theme } from '../types';
type PDrilldownProps = {
    /**
     * Defines which drilldown-item to be visualized as opened.
     */
    activeIdentifier?: string | undefined;
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<DrilldownAriaAttribute>;
    /**
     * If true, the drilldown is visualized as opened.
     */
    open?: boolean;
    /**
     * Adapts the drilldown color depending on the theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PDrilldownProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: any;
} & {
    [x: string]: any;
}, string, import("vue").PublicProps, Readonly<PDrilldownProps> & Readonly<{
    [x: `on${Capitalize<any>}`]: ((...args: any) => any) | undefined;
}>, {
    open: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
