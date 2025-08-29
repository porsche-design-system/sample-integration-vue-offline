import { defineComponent as i, ref as l, inject as d, onMounted as u, onUpdated as h, watch as C, openBlock as y, createBlock as _, resolveDynamicComponent as g, unref as R, withCtx as b, renderSlot as k } from "vue";
import { usePrefix as v, themeInjectionKey as w, addEventListenerToElementRef as p, syncProperties as s } from "../../utils.mjs";
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
    const f = v("p-table"), t = m, e = l(), n = c, a = d(w), r = () => s(e, { ...t, theme: t.theme || a.value });
    return u(() => {
      r(), p(e, "sortingChange", n), p(e, "update", n);
    }), h(r), C(a, (o) => {
      s(e, { theme: t.theme || o });
    }), (o, x) => (y(), _(g(R(f)), {
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
