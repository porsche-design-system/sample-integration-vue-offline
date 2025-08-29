import type { TabsGradientColor, TabsGradientColorScheme, BreakpointCustomizable, TabsSize, Theme, TabsWeight } from '../types';
type PTabsProps = {
    /**
     * Defines which tab to be visualized as selected (zero-based numbering).
     */
    activeTabIndex?: number;
    /**
     * @deprecated since v3.29.0, will be removed with next major release. Adapts the background gradient color of prev and next button.
     */
    gradientColor?: TabsGradientColor;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `gradientColor` instead. Adapts the background gradient color of prev and next button.
     */
    gradientColorScheme?: TabsGradientColorScheme;
    /**
     * The text size.
     */
    size?: BreakpointCustomizable<TabsSize>;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
    /**
     * The text weight.
     */
    weight?: TabsWeight;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PTabsProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    update: (value: import("../types").TabsBarUpdateEvent) => any;
    tabChange: (value: import("../types").TabsBarUpdateEvent) => any;
}, string, import("vue").PublicProps, Readonly<PTabsProps> & Readonly<{
    onUpdate?: ((value: import("../types").TabsBarUpdateEvent) => any) | undefined;
    onTabChange?: ((value: import("../types").TabsBarUpdateEvent) => any) | undefined;
}>, {
    weight: TabsWeight;
    size: BreakpointCustomizable<TabsSize>;
    activeTabIndex: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
