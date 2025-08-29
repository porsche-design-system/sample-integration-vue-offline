import type { ModelSignatureColor, ModelSignatureFetchPriority, ModelSignatureModel, ModelSignatureSize, Theme } from '../types';
type PModelSignatureProps = {
    /**
     * Adapts the color of the component.
     */
    color?: ModelSignatureColor;
    /**
     * Defines the fetch priority of the model signature. In the end it is just a recommendation to the browser, but it defines the priority on its own.
     */
    fetchPriority?: ModelSignatureFetchPriority;
    /**
     * Defines whether the model signature is always loaded or only loaded when it is in the viewport (this feature may not work reliably).
     */
    lazy?: boolean;
    /**
     * Adapts the model of the component.
     */
    model?: ModelSignatureModel;
    /**
     * When set to `true`, then all model signatures are visually aligned with each other. When set to `false` the model signature comes without any safe zone.
     */
    safeZone?: boolean;
    /**
     * Adapts the size of the component. When set to `inherit` a CSS `width` or `height` needs to be defined on the host but not both.
     */
    size?: ModelSignatureSize;
    /**
     * Adapts color depending on theme.
     */
    theme?: Theme;
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_component: import("vue").DefineComponent<PModelSignatureProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PModelSignatureProps> & Readonly<{}>, {
    size: ModelSignatureSize;
    color: ModelSignatureColor;
    lazy: boolean;
    model: ModelSignatureModel;
    fetchPriority: ModelSignatureFetchPriority;
    safeZone: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
