import type { SelectedAriaAttributes, IconAriaAttribute, IconColor, IconName, IconSize, Theme } from '../types';
type PIconProps = {
    /**
     * Add ARIA attributes.
     */
    aria?: SelectedAriaAttributes<IconAriaAttribute>;
    /**
     * Basic color variations depending on theme property.
     */
    color?: IconColor;
    /**
     * Has no effect anymore (the component is now using the native `loading="lazy"` attribute by default)
     * @deprecated since v3.0.0, will be removed with next major release
     */
    lazy?: boolean;
    /**
     * Specifies which icon to use.
     */
    name?: IconName;
    /**
     * The size of the icon.
     */
    size?: IconSize;
    /**
     * Specifies a whole icon path which can be used for custom icons.
     */
    source?: string;
    /**
     * Adapts the color depending on the theme. Has no effect when "inherit" is set as color prop.
     */
    theme?: Theme;
};
declare const _default: import("vue").DefineComponent<PIconProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<PIconProps> & Readonly<{}>, {
    size: IconSize;
    name: IconName;
    color: IconColor;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
