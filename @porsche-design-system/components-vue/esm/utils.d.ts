import type { InjectionKey, Ref } from 'vue';
import type { Theme, ToastMessage } from './lib/types';
export declare const prefixInjectionKey: InjectionKey<string>;
export declare const themeInjectionKey: InjectionKey<Ref<Theme>>;
export declare const usePrefix: (tagName: string) => string;
export declare const syncProperties: <T extends HTMLElement>(elementRef: Ref<T | undefined>, props: Partial<T>) => void;
export declare const addEventListenerToElementRef: <T extends HTMLElement, E extends string>(elementRef: Ref<T | undefined>, eventName: E, emit: (eventName: E, detail: any) => void) => void;
export declare const useToastManager: () => {
    addMessage: (message: ToastMessage) => void;
};
