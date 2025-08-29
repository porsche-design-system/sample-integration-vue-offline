import type { StepperHorizontalItemState } from '../types';
type PStepperHorizontalItemProps = {
    /**
     * Disables the stepper-horizontal-item. No events will be triggered while disabled state is active.
     */
    disabled?: boolean;
    /**
     * The validation state.
     */
    state?: StepperHorizontalItemState;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PStepperHorizontalItemProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PStepperHorizontalItemProps> & Readonly<{}>, {
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
