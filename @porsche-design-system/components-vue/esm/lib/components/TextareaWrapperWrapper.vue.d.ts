import type { BreakpointCustomizable, TextareaWrapperState, Theme } from '../types';
type PTextareaWrapperProps = {
    /**
     * The description text.
     */
    description?: string;
    /**
     * Show or hide label. For better accessibility it is recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * The label text.
     */
    label?: string;
    /**
     * The message styled depending on validation state.
     */
    message?: string;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `showCounter` instead. Show or hide max character count.
     */
    showCharacterCount?: boolean;
    /**
     * Show or hide max character count.
     */
    showCounter?: boolean;
    /**
     * The validation state.
     */
    state?: TextareaWrapperState;
    /**
     * Adapts the color depending on the theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PTextareaWrapperProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PTextareaWrapperProps> & Readonly<{}>, {
    label: string;
    description: string;
    state: TextareaWrapperState;
    hideLabel: BreakpointCustomizable<boolean>;
    message: string;
    showCounter: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
/** @deprecated since v3.29.0, will be removed with next major release. Please use `p-textarea` instead. */
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
