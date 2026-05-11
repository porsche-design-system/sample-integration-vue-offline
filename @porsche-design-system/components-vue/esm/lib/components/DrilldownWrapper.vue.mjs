import { defineComponent as c, ref as f, inject as l, onMounted as u, onUpdated as h, watch as _, createBlock as y, openBlock as C, resolveDynamicComponent as w, unref as v, withCtx as R, renderSlot as k } from "vue";
import { usePrefix as x, themeInjectionKey as B, syncProperties as p, addEventListenerToElementRef as m } from "../../utils.mjs";
const E = /* @__PURE__ */ c({
  __name: "DrilldownWrapper",
  props: {
    activeIdentifier: {},
    aria: {},
    open: { type: Boolean, default: !1 },
    theme: {}
  },
  emits: ["dismiss", "update"],
  setup(i, { emit: a }) {
    const d = x("p-drilldown"), t = i, e = f(), o = a, s = l(B), r = () => p(e, { ...t, theme: t.theme || s.value });
    return u(() => {
      r(), m(e, "dismiss", o), m(e, "update", o);
    }), h(r), _(s, (n) => {
      p(e, { theme: t.theme || n });
    }), (n, P) => (C(), y(w(v(d)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: R(() => [
        k(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  E as default
};
