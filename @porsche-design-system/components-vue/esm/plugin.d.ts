import type { App, InjectionKey } from 'vue';
export type PorscheDesignSystemPluginOptions = {
    prefix?: string;
    extends?: Record<string, unknown>;
};
export type PorscheDesignSystemPlugin = {
    [key: string]: any;
    install: (app: App, options?: PorscheDesignSystemPluginOptions) => void;
};
export declare const porscheDesignSystemSymbol: InjectionKey<PorscheDesignSystemPlugin>;
export declare function usePorscheDesignSystemPlugin(): PorscheDesignSystemPlugin;
export declare function createPorscheDesignSystem(options?: {
    prefix: string;
}): PorscheDesignSystemPlugin;
