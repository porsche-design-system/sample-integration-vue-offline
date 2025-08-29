export type Booleanish = boolean | "true" | "false";
export type AriaAttributes = {
    /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
    "aria-activedescendant"?: string | undefined;
    /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
    "aria-atomic"?: Booleanish | undefined;
    /**
     * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
     * presented if they are made.
     */
    "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
    /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
    /**
     * Defines a string value that labels the current element, which is intended to be converted into Braille.
     * @see aria-label.
     */
    "aria-braillelabel"?: string | undefined;
    /**
     * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
     * @see aria-roledescription.
     */
    "aria-brailleroledescription"?: string | undefined;
    "aria-busy"?: Booleanish | undefined;
    /**
     * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
     * @see aria-pressed @see aria-selected.
     */
    "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
    /**
     * Defines the total number of columns in a table, grid, or treegrid.
     * @see aria-colindex.
     */
    "aria-colcount"?: number | undefined;
    /**
     * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
     * @see aria-colcount @see aria-colspan.
     */
    "aria-colindex"?: number | undefined;
    /**
     * Defines a human readable text alternative of aria-colindex.
     * @see aria-rowindextext.
     */
    "aria-colindextext"?: string | undefined;
    /**
     * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see aria-colindex @see aria-rowspan.
     */
    "aria-colspan"?: number | undefined;
    /**
     * Identifies the element (or elements) whose contents or presence are controlled by the current element.
     * @see aria-owns.
     */
    "aria-controls"?: string | undefined;
    /** Indicates the element that represents the current item within a container or set of related elements. */
    "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
    /**
     * Identifies the element (or elements) that describes the object.
     * @see aria-labelledby
     */
    "aria-describedby"?: string | undefined;
    /**
     * Defines a string value that describes or annotates the current element.
     * @see related aria-describedby.
     */
    "aria-description"?: string | undefined;
    /**
     * Identifies the element that provides a detailed, extended description for the object.
     * @see aria-describedby.
     */
    "aria-details"?: string | undefined;
    /**
     * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
     * @see aria-hidden @see aria-readonly.
     */
    "aria-disabled"?: Booleanish | undefined;
    /**
     * Indicates what functions can be performed when a dragged object is released on the drop target.
     * @deprecated in ARIA 1.1
     */
    "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
    /**
     * Identifies the element that provides an error message for the object.
     * @see aria-invalid @see aria-describedby.
     */
    "aria-errormessage"?: string | undefined;
    /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
    "aria-expanded"?: Booleanish | undefined;
    /**
     * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
     * allows assistive technology to override the general default of reading in document source order.
     */
    "aria-flowto"?: string | undefined;
    /**
     * Indicates an element's "grabbed" state in a drag-and-drop operation.
     * @deprecated in ARIA 1.1
     */
    "aria-grabbed"?: Booleanish | undefined;
    /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
    "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
    /**
     * Indicates whether the element is exposed to an accessibility API.
     * @see aria-disabled.
     */
    "aria-hidden"?: Booleanish | undefined;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     * @see aria-errormessage.
     */
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
    "aria-keyshortcuts"?: string | undefined;
    /**
     * Defines a string value that labels the current element.
     * @see aria-labelledby.
     */
    "aria-label"?: string | undefined;
    /**
     * Identifies the element (or elements) that labels the current element.
     * @see aria-describedby.
     */
    "aria-labelledby"?: string | undefined;
    /** Defines the hierarchical level of an element within a structure. */
    "aria-level"?: number | undefined;
    /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    /** Indicates whether an element is modal when displayed. */
    "aria-modal"?: Booleanish | undefined;
    /** Indicates whether a text box accepts multiple lines of input or only a single line. */
    "aria-multiline"?: Booleanish | undefined;
    /** Indicates that the user may select more than one item from the current selectable descendants. */
    "aria-multiselectable"?: Booleanish | undefined;
    /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    /**
     * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
     * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
     * @see aria-controls.
     */
    "aria-owns"?: string | undefined;
    /**
     * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
     * A hint could be a sample value or a brief description of the expected format.
     */
    "aria-placeholder"?: string | undefined;
    /**
     * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see aria-setsize.
     */
    "aria-posinset"?: number | undefined;
    /**
     * Indicates the current "pressed" state of toggle buttons.
     * @see aria-checked @see aria-selected.
     */
    "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
    /**
     * Indicates that the element is not editable, but is otherwise operable.
     * @see aria-disabled.
     */
    "aria-readonly"?: Booleanish | undefined;
    /**
     * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
     * @see aria-atomic.
     */
    "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined;
    /** Indicates that user input is required on the element before a form may be submitted. */
    "aria-required"?: Booleanish | undefined;
    /** Defines a human-readable, author-localized description for the role of an element. */
    "aria-roledescription"?: string | undefined;
    /**
     * Defines the total number of rows in a table, grid, or treegrid.
     * @see aria-rowindex.
     */
    "aria-rowcount"?: number | undefined;
    /**
     * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
     * @see aria-rowcount @see aria-rowspan.
     */
    "aria-rowindex"?: number | undefined;
    /**
     * Defines a human readable text alternative of aria-rowindex.
     * @see aria-colindextext.
     */
    "aria-rowindextext"?: string | undefined;
    /**
     * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see aria-rowindex @see aria-colspan.
     */
    "aria-rowspan"?: number | undefined;
    /**
     * Indicates the current "selected" state of various widgets.
     * @see aria-checked @see aria-pressed.
     */
    "aria-selected"?: Booleanish | undefined;
    /**
     * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see aria-posinset.
     */
    "aria-setsize"?: number | undefined;
    /** Indicates if items in a table or grid are sorted in ascending or descending order. */
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    /** Defines the maximum allowed value for a range widget. */
    "aria-valuemax"?: number | undefined;
    /** Defines the minimum allowed value for a range widget. */
    "aria-valuemin"?: number | undefined;
    /**
     * Defines the current value for a range widget.
     * @see aria-valuetext.
     */
    "aria-valuenow"?: number | undefined;
    /** Defines the human readable text alternative of aria-valuenow for a range widget. */
    "aria-valuetext"?: string | undefined;
    /** All the WAI-ARIA 1.1 role attribute values from https://w3.org/TR/wai-aria-1.1/#role_definitions */
    role?: AriaRole;
};
export type AriaRole = "alert" | "alertdialog" | "application" | "article" | "banner" | "button" | "cell" | "checkbox" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "dialog" | "directory" | "document" | "feed" | "figure" | "form" | "grid" | "gridcell" | "group" | "heading" | "img" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "none" | "note" | "option" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem";
declare const ICON_NAMES: readonly [
    "360",
    "4-wheel-drive",
    "accessibility",
    "active-cabin-ventilation",
    "add",
    "adjust",
    "aggregation",
    "ai-spark",
    "ai-spark-filled",
    "arrow-compact-down",
    "arrow-compact-left",
    "arrow-compact-right",
    "arrow-compact-up",
    "arrow-double-down",
    "arrow-double-left",
    "arrow-double-right",
    "arrow-double-up",
    "arrow-down",
    "arrow-first",
    "arrow-head-down",
    "arrow-head-left",
    "arrow-head-right",
    "arrow-head-up",
    "arrow-last",
    "arrow-left",
    "arrow-right",
    "arrow-up",
    "arrows",
    "attachment",
    "augmented-reality",
    "battery-empty",
    "battery-empty-co2",
    "battery-empty-fuel",
    "battery-full",
    "battery-half",
    "battery-one-quarter",
    "battery-three-quarters",
    "bell",
    "bookmark",
    "bookmark-filled",
    "brain",
    "broadcast",
    "cabriolet",
    "calculator",
    "calendar",
    "camera",
    "car",
    "car-battery",
    "card",
    "charging-active",
    "charging-network",
    "charging-state",
    "charging-station",
    "chart",
    "chat",
    "check",
    "city",
    "climate",
    "climate-control",
    "clock",
    "close",
    "closed-caption",
    "cloud",
    "co2-class",
    "co2-emission",
    "color-picker",
    "compare",
    "compass",
    "configurate",
    "copy",
    "country-road",
    "coupe",
    "cubic-capacity",
    "cut",
    "delete",
    "disable",
    "dislike",
    "dislike-filled",
    "document",
    "door",
    "download",
    "drag",
    "duration",
    "ear",
    "edit",
    "email",
    "error",
    "error-filled",
    "exclamation",
    "exclamation-filled",
    "external",
    "fast-backward",
    "fast-forward",
    "file-csv",
    "file-excel",
    "filter",
    "fingerprint",
    "flag",
    "flash",
    "fuel-station",
    "garage",
    "genuine-parts",
    "geo-localization",
    "gift",
    "globe",
    "grid",
    "grip",
    "group",
    "hand",
    "heart",
    "heart-filled",
    "highway",
    "highway-filled",
    "history",
    "home",
    "horn",
    "image",
    "increase",
    "information",
    "information-filled",
    "key",
    "laptop",
    "leaf",
    "leather",
    "light",
    "like",
    "like-filled",
    "limousine",
    "linked",
    "list",
    "locate",
    "lock",
    "lock-open",
    "logo-apple-carplay",
    "logo-apple-music",
    "logo-apple-podcast",
    "logo-baidu",
    "logo-delicious",
    "logo-digg",
    "logo-facebook",
    "logo-foursquare",
    "logo-gmail",
    "logo-google",
    "logo-hatena",
    "logo-instagram",
    "logo-kaixin",
    "logo-kakaotalk",
    "logo-kununu",
    "logo-linkedin",
    "logo-naver",
    "logo-pinterest",
    "logo-qq",
    "logo-qq-share",
    "logo-reddit",
    "logo-skyrock",
    "logo-snapchat",
    "logo-sohu",
    "logo-spotify",
    "logo-tecent",
    "logo-telegram",
    "logo-tiktok",
    "logo-tumblr",
    "logo-twitter",
    "logo-viber",
    "logo-vk",
    "logo-wechat",
    "logo-weibo",
    "logo-whatsapp",
    "logo-x",
    "logo-xing",
    "logo-yahoo",
    "logo-youku",
    "logo-youtube",
    "logout",
    "map",
    "menu-dots-horizontal",
    "menu-dots-vertical",
    "menu-lines",
    "microphone",
    "minus",
    "mobile",
    "moon",
    "new-chat",
    "news",
    "north-arrow",
    "oil-can",
    "online-search",
    "parking-brake",
    "parking-light",
    "paste",
    "pause",
    "phone",
    "pin",
    "pin-filled",
    "pivot",
    "play",
    "plug",
    "plus",
    "preheating",
    "price-tag",
    "printer",
    "purchase",
    "push-pin",
    "push-pin-off",
    "qr",
    "qr-off",
    "question",
    "question-filled",
    "racing-flag",
    "radar",
    "radio",
    "refresh",
    "replay",
    "reset",
    "return",
    "road",
    "roof-closed",
    "roof-open",
    "route",
    "rss",
    "save",
    "screen",
    "search",
    "seat",
    "send",
    "service-technician",
    "share",
    "shopping-bag",
    "shopping-bag-filled",
    "shopping-cart",
    "shopping-cart-filled",
    "sidebar",
    "sidelights",
    "skip-backward",
    "skip-forward",
    "snowflake",
    "sort",
    "stack",
    "star",
    "star-filled",
    "steering-wheel",
    "stop",
    "stopwatch",
    "subtract",
    "success",
    "success-filled",
    "sun",
    "suv",
    "switch",
    "tablet",
    "tachometer",
    "theme",
    "tire",
    "trigger-finger",
    "truck",
    "turismo",
    "unlinked",
    "upload",
    "user",
    "user-filled",
    "user-group",
    "user-manual",
    "video",
    "view",
    "view-off",
    "volume-off",
    "volume-up",
    "warning",
    "warning-filled",
    "weather",
    "weight",
    "wifi",
    "work",
    "wrench",
    "wrenches",
    "zoom-in",
    "zoom-out"
];
export type IconName = typeof ICON_NAMES[number];
declare const FLAG_NAMES: readonly [
    "ae",
    "am",
    "ar",
    "at",
    "au",
    "az",
    "ba",
    "be",
    "bg",
    "bh",
    "bn",
    "bo",
    "br",
    "by",
    "ca",
    "ch",
    "cl",
    "cn",
    "co",
    "cr",
    "cw",
    "cy",
    "cz",
    "de",
    "dk",
    "do",
    "dz",
    "ec",
    "ee",
    "eg",
    "es",
    "fi",
    "fr",
    "gb",
    "ge",
    "gh",
    "gr",
    "gt",
    "hk",
    "hn",
    "hr",
    "ht",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "is",
    "it",
    "jm",
    "jo",
    "jp",
    "ke",
    "kh",
    "kr",
    "kw",
    "kz",
    "lb",
    "lk",
    "lt",
    "lu",
    "lv",
    "ma",
    "md",
    "mk",
    "mn",
    "mo",
    "mq",
    "mt",
    "mu",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "om",
    "pa",
    "pe",
    "pf",
    "ph",
    "pk",
    "pl",
    "pr",
    "pt",
    "py",
    "qa",
    "ro",
    "rs",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "sv",
    "th",
    "tn",
    "tr",
    "tt",
    "ua",
    "us",
    "uy",
    "uz",
    "ve",
    "vn",
    "za"
];
export type FlagName = typeof FLAG_NAMES[number];
declare const FORM_STATES: readonly [
    "none",
    "error",
    "success"
];
export type FormState = (typeof FORM_STATES)[number];
declare const BUTTON_ARIA_ATTRIBUTES: readonly [
    "aria-label",
    "aria-expanded",
    "aria-pressed",
    "aria-haspopup"
];
export type ButtonAriaAttribute = (typeof BUTTON_ARIA_ATTRIBUTES)[number];
declare const LINK_ARIA_ATTRIBUTES: readonly [
    "aria-label",
    "aria-current",
    "aria-haspopup"
];
export type LinkAriaAttribute = (typeof LINK_ARIA_ATTRIBUTES)[number];
declare const breakpoints: readonly [
    "base",
    "xs",
    "s",
    "m",
    "l",
    "xl",
    "xxl"
];
export type Breakpoint = (typeof breakpoints)[number];
export type BreakpointValues<T> = {
    [key in Breakpoint]?: T;
} & {
    base: T;
};
export type BreakpointCustomizable<T> = T | BreakpointValues<T>;
declare const LINK_TARGETS: readonly [
    "_self",
    "_blank",
    "_parent",
    "_top"
];
export type LinkTarget = (typeof LINK_TARGETS)[number] | string;
declare const THEMES: readonly [
    "light",
    "dark",
    "auto"
];
export type Theme = (typeof THEMES)[number];
declare const TILE_ASPECT_RATIOS: readonly [
    "1/1",
    "4/3",
    "3/4",
    "16/9",
    "9/16",
    "1:1",
    "4:3",
    "3:4",
    "16:9",
    "9:16"
];
export type TileAspectRatio = (typeof TILE_ASPECT_RATIOS)[number];
declare const TILE_SIZES: readonly [
    "medium",
    "large",
    "inherit",
    "default"
];
export type TileSize = (typeof TILE_SIZES)[number];
declare const TILE_WEIGHTS: readonly [
    "regular",
    "semi-bold"
];
export type TileWeight = (typeof TILE_WEIGHTS)[number];
export type TileBackground = (typeof THEMES)[number];
declare const TILE_ALIGNS: readonly [
    "top",
    "bottom"
];
export type TileAlign = (typeof TILE_ALIGNS)[number];
declare const SCROLLER_ARIA_ATTRIBUTES: readonly [
    "role"
];
export type ScrollerAriaAttribute = (typeof SCROLLER_ARIA_ATTRIBUTES)[number];
declare const GRADIENT_COLOR_SCHEMES: readonly [
    "default",
    "surface"
];
/** @deprecated */
export type ScrollerGradientColorScheme = (typeof GRADIENT_COLOR_SCHEMES)[number];
declare const GRADIENT_COLORS: readonly [
    "background-base",
    "background-surface"
];
/** @deprecated */
export type ScrollerGradientColor = (typeof GRADIENT_COLORS)[number];
export type ScrollerScrollToPosition = {
    scrollPosition: number;
    isSmooth?: boolean;
} | string;
declare const SCROLL_INDICATOR_POSITIONS: readonly [
    "top",
    "center"
];
/** @deprecated */
export type ScrollerScrollIndicatorPosition = (typeof SCROLL_INDICATOR_POSITIONS)[number];
export type ScrollerAlignScrollIndicator = ScrollerScrollIndicatorPosition;
export type MultiSelectState = FormState;
export type MultiSelectDropdownDirection = SelectComponentsDropdownDirection;
/** @deprecated */
export type MultiSelectUpdateEvent = {
    name: string;
    value: string[];
};
export type MultiSelectUpdateEventDetail = MultiSelectUpdateEvent;
export type SelectState = FormState;
export type SelectDropdownDirection = SelectComponentsDropdownDirection;
export type SelectUpdateEventDetail = {
    name: string;
    value: string;
};
declare const SELECT_DROPDOWN_DIRECTIONS: readonly [
    "down",
    "up",
    "auto"
];
export type SelectComponentsDropdownDirection = (typeof SELECT_DROPDOWN_DIRECTIONS)[number];
declare const HEADING_SIZES: readonly [
    "small",
    "medium",
    "large",
    "x-large",
    "xx-large",
    "inherit"
];
export type HeadingSize = (typeof HEADING_SIZES)[number];
declare const HEADING_TAGS: readonly [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
];
export type HeadingTag = (typeof HEADING_TAGS)[number];
declare const TEXT_SIZES: readonly [
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "inherit"
];
export type TextSize = (typeof TEXT_SIZES)[number];
declare const TYPOGRAPHY_ALIGNS: readonly [
    "start",
    "center",
    "end",
    "inherit",
    "left",
    "right"
];
export type TypographyAlign = (typeof TYPOGRAPHY_ALIGNS)[number];
declare const TYPOGRAPHY_TEXT_COLORS: readonly [
    "primary",
    "contrast-low",
    "contrast-medium",
    "contrast-high",
    "notification-success",
    "notification-warning",
    "notification-error",
    "notification-info",
    "inherit",
    "brand",
    "default",
    "neutral-contrast-low",
    "neutral-contrast-medium",
    "neutral-contrast-high",
    "notification-neutral"
];
export type TypographyTextColor = (typeof TYPOGRAPHY_TEXT_COLORS)[number];
declare const TYPOGRAPHY_TEXT_WEIGHTS: readonly [
    "regular",
    "semi-bold",
    "bold",
    "thin",
    "semibold"
];
export type TypographyTextWeight = (typeof TYPOGRAPHY_TEXT_WEIGHTS)[number];
declare const ALIGN_LABELS: readonly [
    "start",
    "end",
    "left",
    "right"
];
export type AlignLabel = (typeof ALIGN_LABELS)[number];
declare const BUTTON_TYPES: readonly [
    "button",
    "submit",
    "reset"
];
export type ButtonType = (typeof BUTTON_TYPES)[number];
declare const LINK_BUTTON_VARIANTS: readonly [
    "primary",
    "secondary",
    "ghost",
    "tertiary"
];
export type LinkButtonVariant = (typeof LINK_BUTTON_VARIANTS)[number];
export type LinkButtonIconName = IconName | "none";
export type ButtonVariant = LinkButtonVariant;
export type LinkVariant = LinkButtonVariant;
export type PorscheDesignSystem = {
    [key: `${number}.${number}.${number}${`-rc.${number}` | ""}`]: {
        prefixes: string[];
        isReady: () => Promise<void>;
        readyResolve: () => void;
    };
    cdn: {
        url: string;
        prefixes: string[];
    };
};
export type SelectedAriaAttributes<T extends keyof AriaAttributes> = Pick<AriaAttributes, T>;
export type SelectedAriaRole<T> = {
    role: Extract<AriaRole, T>;
};
declare const ACCORDION_SIZES: readonly [
    "small",
    "medium"
];
export type AccordionSize = (typeof ACCORDION_SIZES)[number];
/** @deprecated */
export type AccordionUpdateEvent = {
    open: boolean;
};
export type AccordionUpdateEventDetail = AccordionUpdateEvent;
/** @deprecated */
export type AccordionTag = HeadingTag;
export type AccordionHeadingTag = HeadingTag;
declare const INLINE_NOTIFICATION_STATES: readonly [
    "success",
    "info",
    "warning",
    "error",
    "neutral"
];
export type InlineNotificationState = (typeof INLINE_NOTIFICATION_STATES)[number];
export type InlineNotificationActionIcon = IconName;
export type InlineNotificationHeadingTag = HeadingTag;
declare const BANNER_STATES: readonly [
    "info",
    "warning",
    "error",
    "neutral"
];
export type BannerState = (typeof BANNER_STATES)[number];
declare const BANNER_WIDTHS: readonly [
    "extended",
    "basic",
    "fluid"
];
/** @deprecated */
export type BannerWidth = (typeof BANNER_WIDTHS)[number];
export type BannerHeadingTag = InlineNotificationHeadingTag;
export type ButtonIcon = LinkButtonIconName;
declare const GROUP_DIRECTIONS: readonly [
    "row",
    "column"
];
export type GroupDirection = (typeof GROUP_DIRECTIONS)[number];
export type ButtonGroupDirection = GroupDirection;
export type ButtonPureType = ButtonType;
export type ButtonPureIcon = LinkButtonIconName;
export type ButtonPureAriaAttribute = ButtonAriaAttribute;
export type ButtonPureAlignLabel = AlignLabel;
export type ButtonPureWeight = TypographyTextWeight;
export type ButtonPureSize = TextSize;
export type ButtonTileAriaAttribute = ButtonAriaAttribute;
export type ButtonTileIcon = LinkButtonIconName;
export type ButtonTileType = ButtonType;
export type ButtonTileAspectRatio = TileAspectRatio;
export type ButtonTileSize = TileSize;
export type ButtonTileBackground = TileBackground;
export type ButtonTileWeight = TileWeight;
export type ButtonTileAlign = TileAlign;
export type CanvasSidebarStartUpdateEventDetail = {
    open: boolean;
};
declare const CAROUSEL_WIDTHS: readonly [
    "basic",
    "extended"
];
export type CarouselWidth = (typeof CAROUSEL_WIDTHS)[number];
declare const CAROUSEL_SLIDES_PER_PAGE: (string | number)[];
export type CarouselSlidesPerPage = (typeof CAROUSEL_SLIDES_PER_PAGE)[number];
declare const CAROUSEL_GRADIENT_COLORS: readonly [
    "background-base",
    "background-surface",
    "none"
];
export type CarouselGradientColor = (typeof CAROUSEL_GRADIENT_COLORS)[number];
declare const CAROUSEL_ALIGN_HEADERS: readonly [
    "start",
    "center",
    "left"
];
export type CarouselAlignHeader = (typeof CAROUSEL_ALIGN_HEADERS)[number];
export type CarouselHeadingSize = Extract<HeadingSize, "x-large" | "xx-large">;
declare const CAROUSEL_ARIA_ATTRIBUTES: readonly [
    "aria-label"
];
export type CarouselAriaAttribute = (typeof CAROUSEL_ARIA_ATTRIBUTES)[number];
export type CarouselInternationalization = Partial<Record<"prev" | "next" | "first" | "last" | "slideLabel" | "slide", string>>;
/** @deprecated */
export type CarouselUpdateEvent = {
    activeIndex: number;
    previousIndex: number;
};
export type CarouselUpdateEventDetail = CarouselUpdateEvent;
declare const CAROUSEL_ALIGN_CONTROLS: readonly [
    "start",
    "center",
    "auto"
];
export type CarouselAlignControls = (typeof CAROUSEL_ALIGN_CONTROLS)[number];
export type CheckboxState = FormState;
export type CheckboxUpdateEventDetail = {
    name: string;
    value?: string;
    checked: boolean;
};
export type CheckboxBlurEventDetail = Event;
export type CheckboxWrapperState = FormState;
declare const CONTENT_WRAPPER_BACKGROUND_COLORS: readonly [
    "transparent",
    "default"
];
export type ContentWrapperBackgroundColor = (typeof CONTENT_WRAPPER_BACKGROUND_COLORS)[number];
declare const CONTENT_WRAPPER_WIDTHS: readonly [
    "narrow",
    "basic",
    "extended",
    "fluid",
    "full"
];
export type ContentWrapperWidth = (typeof CONTENT_WRAPPER_WIDTHS)[number];
export type CrestTarget = LinkTarget;
export type CrestAriaAttribute = LinkAriaAttribute;
declare const DISPLAY_TAGS: readonly [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
];
export type DisplayTag = (typeof DISPLAY_TAGS)[number];
declare const DISPLAY_SIZES: readonly [
    "small",
    "medium",
    "large",
    "inherit"
];
export type DisplaySize = (typeof DISPLAY_SIZES)[number];
declare const DISPLAY_COLORS: readonly [
    "primary",
    "inherit"
];
export type DisplayColor = (typeof DISPLAY_COLORS)[number];
export type DisplayAlign = TypographyAlign;
declare const DIVIDER_COLORS: readonly [
    "contrast-low",
    "contrast-medium",
    "contrast-high",
    "neutral-contrast-high",
    "neutral-contrast-medium",
    "neutral-contrast-low"
];
export type DividerColor = (typeof DIVIDER_COLORS)[number];
declare const DIVIDER_DIRECTIONS: readonly [
    "vertical",
    "horizontal"
];
export type DividerDirection = (typeof DIVIDER_DIRECTIONS)[number];
export type DividerOrientation = DividerDirection;
declare const DRILLDOWN_ARIA_ATTRIBUTES: readonly [
    "aria-label"
];
export type DrilldownAriaAttribute = (typeof DRILLDOWN_ARIA_ATTRIBUTES)[number];
export type DrilldownUpdate = {
    activeIdentifier: string | undefined;
};
/** @deprecated */
export type DrilldownUpdateEvent = DrilldownUpdate;
export type DrilldownUpdateEventDetail = DrilldownUpdateEvent;
export type DrilldownLinkTarget = LinkTarget;
export type DrilldownLinkAriaAttribute = LinkAriaAttribute;
declare const FIELDSET_LABEL_SIZES: readonly [
    "small",
    "medium"
];
export type FieldsetLabelSize = (typeof FIELDSET_LABEL_SIZES)[number];
export type FieldsetState = FormState;
export type FieldsetWrapperLabelSize = FieldsetLabelSize;
export type FieldsetWrapperState = FieldsetState;
declare const FLAG_ARIA_ATTRIBUTES: readonly [
    "aria-label"
];
export type FlagAriaAttribute = (typeof FLAG_ARIA_ATTRIBUTES)[number];
export type FlagSize = TextSize;
export type FlexInline = boolean;
declare const FLEX_WRAPS: readonly [
    "nowrap",
    "wrap",
    "wrap-reverse"
];
export type FlexWrap = (typeof FLEX_WRAPS)[number];
declare const FLEX_DIRECTIONS: readonly [
    "row",
    "row-reverse",
    "column",
    "column-reverse"
];
export type FlexDirection = (typeof FLEX_DIRECTIONS)[number];
declare const FLEX_JUSTIFY_CONTENTS: readonly [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
];
export type FlexJustifyContent = (typeof FLEX_JUSTIFY_CONTENTS)[number];
declare const FLEX_ALIGN_ITEMS: readonly [
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline"
];
export type FlexAlignItems = (typeof FLEX_ALIGN_ITEMS)[number];
declare const FLEX_ALIGN_CONTENTS: readonly [
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
];
export type FlexAlignContent = (typeof FLEX_ALIGN_CONTENTS)[number];
declare const FLEX_ITEM_WIDTHS: readonly [
    "auto",
    "one-quarter",
    "one-third",
    "half",
    "two-thirds",
    "three-quarters",
    "full"
];
export type FlexItemWidth = (typeof FLEX_ITEM_WIDTHS)[number];
declare const FLEX_ITEM_OFFSETS: readonly [
    "none",
    "one-quarter",
    "one-third",
    "half",
    "two-thirds",
    "three-quarters"
];
export type FlexItemOffset = (typeof FLEX_ITEM_OFFSETS)[number];
declare const FLEX_ITEM_ALIGN_SELFS: readonly [
    "auto",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch"
];
export type FlexItemAlignSelf = (typeof FLEX_ITEM_ALIGN_SELFS)[number];
declare const FLEX_ITEM_GROWS: readonly [
    0,
    1
];
export type FlexItemGrow = (typeof FLEX_ITEM_GROWS)[number];
declare const FLEX_ITEM_SHRINKS: readonly [
    0,
    1
];
export type FlexItemShrink = (typeof FLEX_ITEM_SHRINKS)[number];
declare const FLEX_ITEM_FLEXS: readonly [
    "initial",
    "auto",
    "none",
    "equal"
];
export type FlexItemFlex = (typeof FLEX_ITEM_FLEXS)[number];
declare const FLYOUT_POSITIONS: readonly [
    "start",
    "end",
    "left",
    "right"
];
export type FlyoutPosition = (typeof FLYOUT_POSITIONS)[number];
declare const FLYOUT_FOOTER_BEHAVIOR: readonly [
    "sticky",
    "fixed"
];
export type FlyoutFooterBehavior = (typeof FLYOUT_FOOTER_BEHAVIOR)[number];
declare const FLYOUT_ARIA_ATTRIBUTES: readonly [
    "aria-label"
];
export type FlyoutAriaAttribute = (typeof FLYOUT_ARIA_ATTRIBUTES)[number];
export type FlyoutMotionVisibleEndEventDetail = TransitionEvent;
export type FlyoutMotionHiddenEndEventDetail = TransitionEvent;
declare const GRID_DIRECTIONS: readonly [
    "row",
    "row-reverse",
    "column",
    "column-reverse"
];
export type GridDirection = (typeof GRID_DIRECTIONS)[number];
declare const GRID_WRAPS: readonly [
    "nowrap",
    "wrap"
];
export type GridWrap = (typeof GRID_WRAPS)[number];
declare const GRID_GUTTERS: readonly [
    16,
    24,
    36
];
export type GridGutter = (typeof GRID_GUTTERS)[number];
declare const GRID_ITEM_SIZES: readonly [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
];
export type GridItemSize = (typeof GRID_ITEM_SIZES)[number];
declare const GRID_ITEM_OFFSETS: readonly [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
];
export type GridItemOffset = (typeof GRID_ITEM_OFFSETS)[number];
declare const HEADING_COLORS: readonly [
    "primary",
    "inherit"
];
export type HeadingColor = (typeof HEADING_COLORS)[number];
export type HeadingAlign = TypographyAlign;
declare const HEADLINE_VARIANTS: readonly [
    "large-title",
    "headline-1",
    "headline-2",
    "headline-3",
    "headline-4",
    "headline-5"
];
export type HeadlineVariantType = (typeof HEADLINE_VARIANTS)[number];
export type HeadlineVariantCustom = Exclude<BreakpointCustomizable<TextSize>, TextSize>;
export type HeadlineVariant = HeadlineVariantType | HeadlineVariantCustom | Extract<TextSize, "inherit">;
declare const HEADLINE_TAGS: readonly [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
];
export type HeadlineTag = (typeof HEADLINE_TAGS)[number];
declare const HEADLINE_COLORS: readonly [
    "primary",
    "default",
    "inherit"
];
export type HeadlineColor = (typeof HEADLINE_COLORS)[number];
export type HeadlineAlign = TypographyAlign;
declare const ICON_ARIA_ATTRIBUTES: readonly [
    "aria-label"
];
export type IconAriaAttribute = (typeof ICON_ARIA_ATTRIBUTES)[number];
export type IconSize = TextSize;
declare const ICON_COLORS: readonly [
    "primary",
    "contrast-low",
    "contrast-medium",
    "contrast-high",
    "notification-success",
    "notification-warning",
    "notification-error",
    "notification-info",
    "inherit",
    "brand",
    "default",
    "neutral-contrast-low",
    "neutral-contrast-medium",
    "neutral-contrast-high",
    "notification-neutral",
    "state-disabled"
];
export type IconColor = (typeof ICON_COLORS)[number];
export type InputDateState = FormState;
export type InputDateChangeEventDetail = Event;
export type InputDateBlurEventDetail = Event;
export type InputDateInputEventDetail = InputEvent;
export type InputEmailState = FormState;
export type InputEmailChangeEventDetail = Event;
export type InputEmailBlurEventDetail = Event;
export type InputEmailInputEventDetail = InputEvent;
export type InputNumberState = FormState;
export type InputNumberChangeEventDetail = Event;
export type InputNumberBlurEventDetail = Event;
export type InputNumberInputEventDetail = InputEvent;
export type InputPasswordState = FormState;
export type InputPasswordChangeEventDetail = Event;
export type InputPasswordBlurEventDetail = Event;
export type InputPasswordInputEventDetail = InputEvent;
export type InputSearchState = FormState;
export type InputSearchChangeEventDetail = Event;
export type InputSearchBlurEventDetail = Event;
export type InputSearchInputEventDetail = InputEvent;
export type InputTelState = FormState;
export type InputTelChangeEventDetail = Event;
export type InputTelBlurEventDetail = Event;
export type InputTelInputEventDetail = InputEvent;
export type InputTextState = FormState;
export type InputTextChangeEventDetail = Event;
export type InputTextBlurEventDetail = Event;
export type InputTextInputEventDetail = InputEvent;
export type InputTimeState = FormState;
export type InputTimeChangeEventDetail = Event;
export type InputTimeBlurEventDetail = Event;
export type InputTimeInputEventDetail = InputEvent;
export type InputUrlState = FormState;
export type InputUrlChangeEventDetail = Event;
export type InputUrlBlurEventDetail = Event;
export type InputUrlInputEventDetail = InputEvent;
export type LinkIcon = LinkButtonIconName;
export type LinkPureIcon = LinkButtonIconName;
export type LinkPureAriaAttribute = LinkAriaAttribute;
export type LinkPureAlignLabel = AlignLabel;
export type LinkPureWeight = TypographyTextWeight;
export type LinkPureSize = TextSize;
export type LinkPureTarget = LinkTarget;
export type LinkSocialIcon = Extract<IconName, "logo-facebook" | "logo-google" | "logo-instagram" | "logo-linkedin" | "logo-pinterest" | "logo-twitter" | "logo-wechat" | "logo-whatsapp" | "logo-xing" | "logo-youtube" | "logo-baidu" | "logo-delicious" | "logo-digg" | "logo-foursquare" | "logo-gmail" | "logo-hatena" | "logo-kaixin" | "logo-kakaotalk" | "logo-naver" | "logo-qq-share" | "logo-qq" | "logo-reddit" | "logo-skyrock" | "logo-sohu" | "logo-tecent" | "logo-telegram" | "logo-tiktok" | "logo-tumblr" | "logo-viber" | "logo-vk" | "logo-weibo" | "logo-yahoo" | "logo-youku">;
export type LinkSocialTarget = LinkTarget;
export type LinkTileTarget = LinkTarget;
export type LinkTileAriaAttribute = LinkAriaAttribute;
export type LinkTileAspectRatio = TileAspectRatio;
export type LinkTileSize = TileSize;
export type LinkTileBackground = TileBackground;
export type LinkTileAlign = TileAlign;
declare const LINK_TILE_WEIGHTS: readonly [
    "regular",
    "semi-bold",
    "semibold"
];
export type LinkTileWeight = (typeof LINK_TILE_WEIGHTS)[number];
declare const LINK_TILE_MODEL_SIGNATURE_MODELS: readonly [
    "718",
    "911",
    "boxster",
    "cayenne",
    "cayman",
    "macan",
    "panamera",
    "taycan",
    "turbo-s",
    "turbo"
];
export type LinkTileModelSignatureModel = (typeof LINK_TILE_MODEL_SIGNATURE_MODELS)[number];
declare const LINK_TILE_MODEL_SIGNATURE_HEADING_TAGS: readonly [
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
];
export type LinkTileModelSignatureHeadingTag = (typeof LINK_TILE_MODEL_SIGNATURE_HEADING_TAGS)[number];
export type LinkTileModelSignatureWeight = TileWeight;
export type LinkTileModelSignatureAspectRatio = TileAspectRatio;
export type LinkTileModelSignatureLinkDirection = GroupDirection;
export type LinkTileProductTarget = LinkTarget;
/** @deprecated */
export type LinkTileProductLikeEvent = {
    liked: boolean;
};
export type LinkTileProductLikeEventDetail = LinkTileProductLikeEvent;
declare const TILE_PRODUCT_ASPECT_RATIOS: readonly [
    "3:4",
    "9:16"
];
export type LinkTileProductAspectRatio = Extract<TileAspectRatio, (typeof TILE_PRODUCT_ASPECT_RATIOS)[number]>;
declare const MODEL_SIGNATURES_MANIFEST: {
    "718": {
        src: string;
        width: number;
        height: number;
    };
    "911": {
        src: string;
        width: number;
        height: number;
    };
    boxster: {
        src: string;
        width: number;
        height: number;
    };
    cayenne: {
        src: string;
        width: number;
        height: number;
    };
    cayman: {
        src: string;
        width: number;
        height: number;
    };
    macan: {
        src: string;
        width: number;
        height: number;
    };
    panamera: {
        src: string;
        width: number;
        height: number;
    };
    taycan: {
        src: string;
        width: number;
        height: number;
    };
    "turbo-s": {
        src: string;
        width: number;
        height: number;
    };
    turbo: {
        src: string;
        width: number;
        height: number;
    };
};
declare const MARQUE_VARIANTS: readonly [
    "75-years",
    "default"
];
export type MarqueVariant = (typeof MARQUE_VARIANTS)[number];
export type MarqueTarget = LinkTarget;
export type MarqueAriaAttribute = LinkAriaAttribute;
declare const MARQUE_SIZES: readonly [
    "responsive",
    "small",
    "medium"
];
export type MarqueSize = (typeof MARQUE_SIZES)[number];
declare const BACKDROPS: readonly [
    "blur",
    "shading"
];
export type Backdrop = (typeof BACKDROPS)[number];
declare const MODAL_ARIA_ATTRIBUTES: readonly [
    "aria-label",
    "role"
];
export type ModalAriaAttribute = (typeof MODAL_ARIA_ATTRIBUTES)[number];
export type ModalBackdrop = Backdrop;
export type ModalMotionVisibleEndEventDetail = TransitionEvent;
export type ModalMotionHiddenEndEventDetail = TransitionEvent;
declare const MODEL_SIGNATURE_FETCH_PRIORITY: readonly [
    "low",
    "high",
    "auto"
];
export type ModelSignatureFetchPriority = (typeof MODEL_SIGNATURE_FETCH_PRIORITY)[number];
declare const MODEL_SIGNATURE_SIZES: readonly [
    "small",
    "inherit"
];
export type ModelSignatureSize = (typeof MODEL_SIGNATURE_SIZES)[number];
export type ModelSignatureModel = keyof typeof MODEL_SIGNATURES_MANIFEST;
declare const MODEL_SIGNATURE_COLORS: readonly [
    "primary",
    "contrast-low",
    "contrast-medium",
    "contrast-high",
    "inherit"
];
export type ModelSignatureColor = (typeof MODEL_SIGNATURE_COLORS)[number];
declare const PAGINATION_NUMBER_OF_PAGE_LINKS: readonly [
    5,
    7
];
/** @deprecated */
export type PaginationMaxNumberOfPageLinks = (typeof PAGINATION_NUMBER_OF_PAGE_LINKS)[number];
/** @deprecated */
export type PaginationUpdateEvent = {
    page: number;
    previousPage: number;
};
export type PaginationUpdateEventDetail = PaginationUpdateEvent;
export type PaginationInternationalization = Partial<Record<"root" | "prev" | "next" | "page", string>>;
declare const PIN_CODE_TYPES: readonly [
    "number",
    "password"
];
export type PinCodeType = (typeof PIN_CODE_TYPES)[number];
declare const PIN_CODE_LENGTHS: readonly [
    1,
    2,
    3,
    4,
    5,
    6
];
export type PinCodeLength = (typeof PIN_CODE_LENGTHS)[number];
/** @deprecated */
export type PinCodeUpdateEvent = {
    value: string;
    isComplete: boolean;
};
export type PinCodeUpdateEventDetail = PinCodeUpdateEvent;
export type PinCodeState = FormState;
declare const POPOVER_DIRECTIONS: readonly [
    "top",
    "right",
    "bottom",
    "left"
];
export type PopoverDirection = (typeof POPOVER_DIRECTIONS)[number];
declare const POPOVER_ARIA_ATTRIBUTES: readonly [
    "aria-label"
];
export type PopoverAriaAttribute = (typeof POPOVER_ARIA_ATTRIBUTES)[number];
export type RadioButtonWrapperState = FormState;
declare const SEGMENTED_CONTROL_BACKGROUND_COLORS: readonly [
    "background-surface",
    "background-default"
];
export type SegmentedControlBackgroundColor = (typeof SEGMENTED_CONTROL_BACKGROUND_COLORS)[number];
/** @deprecated */
export type SegmentedControlUpdateEvent = {
    value: string | number;
};
export type SegmentedControlUpdateEventDetail = SegmentedControlUpdateEvent;
declare const SEGMENTED_CONTROL_COLUMNS: (string | number)[];
export type SegmentedControlColumns = (typeof SEGMENTED_CONTROL_COLUMNS)[number];
export type SegmentedControlItemIcon = LinkButtonIconName;
declare const SEGMENTED_CONTROL_ITEM_ARIA_ATTRIBUTES: readonly [
    "aria-label"
];
export type SegmentedControlItemAriaAttribute = (typeof SEGMENTED_CONTROL_ITEM_ARIA_ATTRIBUTES)[number];
declare const DROPDOWN_DIRECTIONS: readonly [
    "down",
    "up",
    "auto"
];
export type SelectWrapperDropdownDirection = (typeof DROPDOWN_DIRECTIONS)[number];
export type SelectWrapperState = FormState;
declare const SHEET_ARIA_ATTRIBUTES: readonly [
    "aria-label",
    "role"
];
export type SheetAriaAttribute = (typeof SHEET_ARIA_ATTRIBUTES)[number];
export type SheetMotionVisibleEndEventDetail = TransitionEvent;
export type SheetMotionHiddenEndEventDetail = TransitionEvent;
declare const SPINNER_SIZES: readonly [
    "small",
    "medium",
    "large",
    "inherit"
];
export type SpinnerSize = (typeof SPINNER_SIZES)[number];
declare const SPINNER_ARIA_ATTRIBUTES: readonly [
    "aria-label"
];
export type SpinnerAriaAttribute = (typeof SPINNER_ARIA_ATTRIBUTES)[number];
declare const STEPPER_HORIZONTAL_SIZES: readonly [
    "small",
    "medium"
];
export type StepperHorizontalSize = (typeof STEPPER_HORIZONTAL_SIZES)[number];
/** @deprecated */
export type StepperHorizontalUpdateEvent = {
    activeStepIndex: number;
};
export type StepperHorizontalUpdateEventDetail = StepperHorizontalUpdateEvent;
declare const STEPPER_ITEM_STATES: readonly [
    "current",
    "complete",
    "warning"
];
export type StepperHorizontalItemState = (typeof STEPPER_ITEM_STATES)[number];
export type SwitchAlignLabel = AlignLabel;
/** @deprecated */
export type SwitchUpdateEvent = {
    checked: boolean;
};
export type SwitchUpdateEventDetail = SwitchUpdateEvent;
export type Direction = "asc" | "desc";
declare const TABLE_LAYOUTS: readonly [
    "auto",
    "fixed"
];
export type TableLayout = (typeof TABLE_LAYOUTS)[number];
export type TableHeadCellSort = {
    id: string;
    active?: boolean;
    direction?: Direction;
};
/** @deprecated */
export type TableUpdateEvent = TableHeadCellSort;
export type TableUpdateEventDetail = TableUpdateEvent;
declare const TABS_BAR_SIZES: readonly [
    "small",
    "medium"
];
export type TabsBarSize = (typeof TABS_BAR_SIZES)[number];
declare const TABS_BAR_WEIGHTS: readonly [
    "regular",
    "semi-bold",
    "semibold"
];
export type TabsBarWeight = (typeof TABS_BAR_WEIGHTS)[number];
/** @deprecated */
export type TabsBarUpdateEvent = {
    activeTabIndex: number;
};
export type TabsBarUpdateEventDetail = TabsBarUpdateEvent;
/** @deprecated */
export type TabsBarGradientColorScheme = ScrollerGradientColorScheme;
export type TabsBarGradientColor = ScrollerGradientColor;
export type TabsSize = TabsBarSize;
export type TabsWeight = TabsBarWeight;
/** @deprecated */
export type TabsGradientColorScheme = TabsBarGradientColorScheme;
export type TabsGradientColor = TabsBarGradientColor;
/** @deprecated */
export type TabsUpdateEvent = TabsBarUpdateEvent;
export type TabsUpdateEventDetail = TabsUpdateEvent;
declare const TAG_DISMISSIBLE_COLORS: readonly [
    "background-base",
    "background-surface",
    "background-default"
];
export type TagDismissibleColor = (typeof TAG_DISMISSIBLE_COLORS)[number];
declare const TAG_DISMISSIBLE_ARIA_ATTRIBUTES: readonly [
    "aria-label"
];
export type TagDismissibleAriaAttribute = (typeof TAG_DISMISSIBLE_ARIA_ATTRIBUTES)[number];
export type TagIcon = IconName;
declare const TAG_COLORS: readonly [
    "background-base",
    "background-surface",
    "background-default",
    "background-frosted",
    "primary",
    "notification-info-soft",
    "notification-warning-soft",
    "notification-success-soft",
    "notification-error-soft",
    "neutral-contrast-high",
    "notification-neutral",
    "notification-warning",
    "notification-success",
    "notification-error"
];
export type TagColor = (typeof TAG_COLORS)[number];
declare const TEXT_TAGS: readonly [
    "p",
    "span",
    "div",
    "address",
    "blockquote",
    "figcaption",
    "cite",
    "time",
    "legend"
];
export type TextTag = (typeof TEXT_TAGS)[number];
export type TextAlign = TypographyAlign;
export type TextColor = TypographyTextColor;
export type TextWeight = TypographyTextWeight;
declare const UNIT_POSITIONS: readonly [
    "prefix",
    "suffix"
];
export type TextFieldWrapperUnitPosition = (typeof UNIT_POSITIONS)[number];
export type TextFieldWrapperActionIcon = Extract<IconName, "locate">;
export type TextFieldWrapperState = FormState;
declare const LIST_TYPES: readonly [
    "unordered",
    "ordered"
];
/** @deprecated */
export type TextListListType = (typeof LIST_TYPES)[number];
declare const ORDER_TYPES: readonly [
    "numbered",
    "alphabetically"
];
/** @deprecated */
export type TextListOrderType = (typeof ORDER_TYPES)[number];
declare const TEXT_LIST_TYPES: readonly [
    "unordered",
    "numbered",
    "alphabetically"
];
export type TextListType = (typeof TEXT_LIST_TYPES)[number];
export type TextareaState = FormState;
declare const TEXTAREA_WRAPS: readonly [
    "hard",
    "soft",
    "off"
];
export type TextareaWrap = (typeof TEXTAREA_WRAPS)[number];
declare const TEXTAREA_RESIZE: readonly [
    "none",
    "both",
    "horizontal",
    "vertical",
    "block",
    "inline"
];
export type TextareaResize = (typeof TEXTAREA_RESIZE)[number];
export type TextareaChangeEventDetail = Event;
export type TextareaBlurEventDetail = Event;
export type TextareaInputEventDetail = InputEvent;
export type TextareaWrapperState = FormState;
declare const TOAST_STATES: readonly [
    "info",
    "success",
    "neutral"
];
export type ToastState = (typeof TOAST_STATES)[number];
export type ToastMessage = {
    text: string;
    state?: ToastState;
};
declare const WORDMARK_SIZES: readonly [
    "small",
    "inherit"
];
export type WordmarkSize = (typeof WORDMARK_SIZES)[number];
export type WordmarkTarget = LinkTarget;
export type WordmarkAriaAttribute = LinkAriaAttribute;
export {};
