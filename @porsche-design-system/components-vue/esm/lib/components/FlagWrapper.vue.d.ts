import type { SelectedAriaAttributes, FlagAriaAttribute, FlagName, FlagSize } from '../types';
type PFlagProps = {
    /**
     * A map of ARIA attributes to enhance the flag's accessibility. For example, use `{ 'aria-label': 'German flag' }` to provide a descriptive label for screen readers.
     */
    aria?: SelectedAriaAttributes<FlagAriaAttribute>;
    /**
     * Specifies the country flag to display. Use the two-letter ISO 3166-1 alpha-2 country code. For example, use `us` for the United States, `de` for Germany, `gb` for Great Britain.
     */
    name?: FlagName;
    /**
     * The size of the flag. Pre-defined sizes are aligned with the Porsche Next typescale. Available values are `small`, `medium`, `large`, etc.
     */
    size?: FlagSize;
};
declare const _default: import("vue").DefineComponent<PFlagProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PFlagProps> & Readonly<{}>, {
    size: FlagSize;
    name: FlagName;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
