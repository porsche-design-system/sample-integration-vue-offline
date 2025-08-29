import type { BreakpointCustomizable, ButtonPureAlignLabel, SelectedAriaAttributes, ButtonPureAriaAttribute, ButtonPureIcon, ButtonPureSize, Theme, ButtonPureType, ButtonPureWeight } from '../types';
type PButtonPureProps = {
    /**
     * Display button in active state.
     */
    active?: boolean;
    /**
     * Aligns the label.
     */
    alignLabel?: BreakpointCustomizable<ButtonPureAlignLabel>;
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<ButtonPureAriaAttribute>;
    /**
     * Disables the button. No events will be triggered while disabled state is active.
     */
    disabled?: boolean;
    /**
     * The id of a form element the button should be associated with.
     */
    form?: string;
    /**
     * Show or hide label. For better accessibility it is recommended to show the label.
     */
    hideLabel?: BreakpointCustomizable<boolean>;
    /**
     * The icon shown.
     */
    icon?: ButtonPureIcon;
    /**
     * A URL path to a custom icon.
     */
    iconSource?: string;
    /**
     * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
     */
    loading?: boolean;
    /**
     * The name of the button, submitted as a pair with the button's value as part of the form data, when that button is used to submit the form.
     */
    name?: string;
    /**
     * Size of the button.
     */
    size?: BreakpointCustomizable<ButtonPureSize>;
    /**
     * Stretches the area between icon and label to max available space.
     */
    stretch?: BreakpointCustomizable<boolean>;
    /**
     * Adapts the button color depending on the theme.
     */
    theme?: Theme;
    /**
     * Specifies the type of the button.
     */
    type?: ButtonPureType;
    /**
     * Shows an underline under the label.
     */
    underline?: boolean;
    /**
     * Defines the value associated with the button's name when it's submitted with the form data. This value is passed to the server in params when the form is submitted using this button.
     */
    value?: string;
    /**
     * The weight of the text (only has effect with visible label).
     * @deprecated since v3.0.0, will be removed with next major release
     */
    weight?: ButtonPureWeight;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PButtonPureProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PButtonPureProps> & Readonly<{}>, {
    weight: ButtonPureWeight;
    stretch: BreakpointCustomizable<boolean>;
    type: ButtonPureType;
    size: BreakpointCustomizable<ButtonPureSize>;
    disabled: boolean;
    hideLabel: BreakpointCustomizable<boolean>;
    icon: ButtonPureIcon;
    loading: boolean;
    active: boolean;
    alignLabel: BreakpointCustomizable<ButtonPureAlignLabel>;
    underline: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
