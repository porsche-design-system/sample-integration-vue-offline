import type { FieldsetWrapperLabelSize, FieldsetWrapperState, Theme } from '../types';
type PFieldsetWrapperProps = {
    /**
     * The label text.
     */
    label?: string;
    /**
     * The size of the label text.
     */
    labelSize?: FieldsetWrapperLabelSize;
    /**
     * The message styled depending on validation state.
     */
    message?: string;
    /**
     * Marks the Fieldset as required.
     */
    required?: boolean;
    /**
     * The validation state.
     */
    state?: FieldsetWrapperState;
    /**
     * Adapts color depending on theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<PFieldsetWrapperProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PFieldsetWrapperProps> & Readonly<{}>, {
    label: string;
    state: FieldsetWrapperState;
    required: boolean;
    message: string;
    labelSize: FieldsetWrapperLabelSize;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
/** @deprecated since v3.0.0, will be removed with next major release. Please use `p-fieldset` instead. */
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
