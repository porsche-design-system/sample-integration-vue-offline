import type { BreakpointCustomizable, SwitchAlignLabel, Theme } from '../types';
type PSwitchProps = {
    /**
     * Aligns the label.
     */
    alignLabel?: BreakpointCustomizable<SwitchAlignLabel>;
    /**
     * Visualize the switch with on/off status.
     */
    checked?: boolean;
    /**
     * Displays as compact version.
     */
    compact?: boolean;
    /**
     * Disables the switch. No events will be triggered while disabled state is active.
     */
    disabled?: boolean;
    /**
     * Show or hide label. For better accessibility it's recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * Disables the switch and shows a loading indicator. No events will be triggered while loading state is active.
     */
    loading?: boolean;
    /**
     * Stretches the contents to max available space.
     */
    stretch?: BreakpointCustomizable<boolean>;
    /**
     * Adapts the switch color depending on the theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PSwitchProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    update: (value: import("../types").SwitchUpdateEvent) => any;
    switchChange: (value: import("../types").SwitchUpdateEvent) => any;
}, string, import("vue").PublicProps, Readonly<PSwitchProps> & Readonly<{
    onUpdate?: ((value: import("../types").SwitchUpdateEvent) => any) | undefined;
    onSwitchChange?: ((value: import("../types").SwitchUpdateEvent) => any) | undefined;
}>, {
    stretch: BreakpointCustomizable<boolean>;
    compact: boolean;
    disabled: boolean;
    hideLabel: BreakpointCustomizable<boolean>;
    loading: boolean;
    alignLabel: BreakpointCustomizable<SwitchAlignLabel>;
    checked: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
