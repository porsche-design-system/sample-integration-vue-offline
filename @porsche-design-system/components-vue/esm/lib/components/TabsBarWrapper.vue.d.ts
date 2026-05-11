import type { TabsBarGradientColor, TabsBarGradientColorScheme, BreakpointCustomizable, TabsBarSize, Theme, TabsBarWeight } from '../types';
type PTabsBarProps = {
    /**
     * Defines which tab to be visualized as selected (zero-based numbering), undefined if none should be selected.
     */
    activeTabIndex?: number | undefined;
    /**
     * @deprecated since v3.29.0, will be removed with next major release. Adapts the background gradient color of prev and next button.
     */
    gradientColor?: TabsBarGradientColor;
    /**
     * @deprecated since v3.0.0, will be removed with next major release. Adapts the background gradient color of prev and next button.
     */
    gradientColorScheme?: TabsBarGradientColorScheme;
    /**
     * The text size.
     */
    size?: BreakpointCustomizable<TabsBarSize>;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
    /**
     * The text weight.
     */
    weight?: TabsBarWeight;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PTabsBarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    update: (value: import("../types").TabsBarUpdateEvent) => any;
    tabChange: (value: import("../types").TabsBarUpdateEvent) => any;
}, string, import("vue").PublicProps, Readonly<PTabsBarProps> & Readonly<{
    onUpdate?: ((value: import("../types").TabsBarUpdateEvent) => any) | undefined;
    onTabChange?: ((value: import("../types").TabsBarUpdateEvent) => any) | undefined;
}>, {
    weight: TabsBarWeight;
    size: BreakpointCustomizable<TabsBarSize>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
