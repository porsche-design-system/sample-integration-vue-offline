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
declare const __VLS_base: import("vue").DefineComponent<PStepperHorizontalProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    update: (value: import("../types").StepperHorizontalUpdateEvent) => any;
    stepChange: (value: import("../types").StepperHorizontalUpdateEvent) => any;
}, string, import("vue").PublicProps, Readonly<PStepperHorizontalProps> & Readonly<{
    onUpdate?: ((value: import("../types").StepperHorizontalUpdateEvent) => any) | undefined;
    onStepChange?: ((value: import("../types").StepperHorizontalUpdateEvent) => any) | undefined;
}>, {
    size: BreakpointCustomizable<StepperHorizontalSize>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
