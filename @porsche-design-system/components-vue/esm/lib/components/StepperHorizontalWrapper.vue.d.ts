import type { BreakpointCustomizable, StepperHorizontalSize, Theme } from '../types';
type PStepperHorizontalProps = {
    size?: BreakpointCustomizable<StepperHorizontalSize>;
    /**
     * Adapts the tag color depending on the theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PStepperHorizontalProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    update: (value: import("../types").StepperHorizontalUpdateEvent) => any;
    stepChange: (value: import("../types").StepperHorizontalUpdateEvent) => any;
}, string, import("vue").PublicProps, Readonly<PStepperHorizontalProps> & Readonly<{
    onUpdate?: ((value: import("../types").StepperHorizontalUpdateEvent) => any) | undefined;
    onStepChange?: ((value: import("../types").StepperHorizontalUpdateEvent) => any) | undefined;
}>, {
    size: BreakpointCustomizable<StepperHorizontalSize>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
