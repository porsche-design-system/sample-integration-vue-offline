import { defineComponent as i, ref as l, inject as d, onMounted as u, onUpdated as h, watch as C, createBlock as y, openBlock as _, resolveDynamicComponent as g, unref as R, withCtx as b, renderSlot as k } from "vue";
import { usePrefix as v, themeInjectionKey as w, syncProperties as p, addEventListenerToElementRef as s } from "../../utils.mjs";
const T = /* @__PURE__ */ i({
  __name: "TableWrapper",
  props: {
    caption: {},
    compact: { type: Boolean, default: !1 },
    layout: { default: "auto" },
    theme: {}
  },
  emits: ["sortingChange", "update"],
  setup(m, { emit: c }) {
    const f = v("p-table"), t = m, e = l(), n = c, a = d(w), r = () => p(e, { ...t, theme: t.theme || a.value });
    return u(() => {
      r(), s(e, "sortingChange", n), s(e, "update", n);
    }), h(r), C(a, (o) => {
      p(e, { theme: t.theme || o });
    }), (o, x) => (_(), y(g(R(f)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: b(() => [
        k(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  T as default
};
