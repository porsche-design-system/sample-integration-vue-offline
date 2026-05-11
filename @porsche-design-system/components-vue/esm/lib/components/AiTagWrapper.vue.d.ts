import type { AiTagLocale, Theme, AiTagVariant } from '../types';
type PAiTagProps = {
    /**
     * Locale for the AI text (ISO format, e.g. "de_DE").
     */
    locale?: AiTagLocale;
    /**
     * Adapts the tag color depending on the theme.
     */
    theme?: Theme;
    /**
     * Variant to display: 'abbreviation' (e.g. "AI"), 'generated' (e.g. "AI-generated"), or 'modified' (e.g. "AI-modified").
     */
    variant?: AiTagVariant;
};
declare const __VLS_export: import("vue").DefineComponent<PAiTagProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PAiTagProps> & Readonly<{}>, {
    locale: AiTagLocale;
    variant: AiTagVariant;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
