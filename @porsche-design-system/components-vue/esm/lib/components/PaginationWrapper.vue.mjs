import { defineComponent as c, ref as f, inject as u, onMounted as g, onUpdated as d, watch as P, openBlock as h, createBlock as y, resolveDynamicComponent as C, unref as v } from "vue";
import { usePrefix as x, themeInjectionKey as L, addEventListenerToElementRef as r, syncProperties as l } from "../../utils.mjs";
const R = /* @__PURE__ */ c({
  __name: "PaginationWrapper",
  props: {
    activePage: { default: 1 },
    allyLabel: {},
    allyLabelNext: {},
    allyLabelPage: {},
    allyLabelPrev: {},
    intl: { default: () => ({ root: "Pagination", prev: "Previous page", next: "Next page", page: "Page" }) },
    itemsPerPage: { default: 1 },
    maxNumberOfPageLinks: {},
    showLastPage: { type: Boolean, default: !0 },
    theme: {},
    totalItemsCount: { default: 1 }
  },
  emits: ["pageChange", "update"],
  setup(s, { emit: m }) {
    const i = x("p-pagination"), t = s, e = f(), a = m, n = u(L), o = () => l(e, { ...t, theme: t.theme || n.value });
    return g(() => {
      o(), r(e, "pageChange", a), r(e, "update", a);
    }), d(o), P(n, (p) => {
      l(e, { theme: t.theme || p });
    }), (p, _) => (h(), y(C(v(i)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, null, 512));
  }
});
export {
  R as default
};
