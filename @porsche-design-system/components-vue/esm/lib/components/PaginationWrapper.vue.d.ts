import type { PaginationInternationalization, BreakpointCustomizable, PaginationMaxNumberOfPageLinks, Theme } from '../types';
type PPaginationProps = {
    /**
     * Index of the currently active page.
     */
    activePage: number;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `intl.root` instead. Aria label what the pagination is used for.
     */
    allyLabel?: string;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `intl.next` instead. Aria label for next page icon.
     */
    allyLabelNext?: string;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `intl.page` instead. Aria label for page navigation.
     */
    allyLabelPage?: string;
    /**
     * @deprecated since v3.0.0, will be removed with next major release, use `intl.prev` instead. Aria label for previous page icon.
     */
    allyLabelPrev?: string;
    /**
     * Override the default wordings that are used for aria-labels on the next/prev and page buttons.
     */
    intl?: PaginationInternationalization;
    /**
     * The total count of items which should be shown per page.
     */
    itemsPerPage?: number;
    /**
     * Has no effect anymore
     * @deprecated since v3.10.0, will be removed with next major release
     */
    maxNumberOfPageLinks?: BreakpointCustomizable<PaginationMaxNumberOfPageLinks>;
    /**
     * Show or hide the button to jump to the last page.
     */
    showLastPage?: boolean;
    /**
     * Adapts the color when used on dark background.
     */
    theme?: Theme;
    /**
     * The total count of items.
     */
    totalItemsCount: number;
};
declare const _default: import("vue").DefineComponent<PPaginationProps, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    update: (value: import("../types").PaginationUpdateEvent) => any;
    pageChange: (value: import("../types").PaginationUpdateEvent) => any;
}, string, import("vue").PublicProps, Readonly<PPaginationProps> & Readonly<{
    onUpdate?: ((value: import("../types").PaginationUpdateEvent) => any) | undefined;
    onPageChange?: ((value: import("../types").PaginationUpdateEvent) => any) | undefined;
}>, {
    intl: PaginationInternationalization;
    activePage: number;
    itemsPerPage: number;
    showLastPage: boolean;
    totalItemsCount: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
