import { defineComponent as s, ref as m, inject as f, onMounted as u, onUpdated as l, watch as d, openBlock as i, createBlock as h, resolveDynamicComponent as _, unref as y, withCtx as C, renderSlot as g } from "vue";
import { usePrefix as k, themeInjectionKey as w, syncProperties as c } from "../../utils.mjs";
const R = /* @__PURE__ */ s({
  __name: "TagWrapper",
  props: {
    color: { default: "background-surface" },
    compact: { type: Boolean, default: !1 },
    icon: {},
    iconSource: {},
    theme: {}
  },
  setup(p) {
    const a = k("p-tag"), e = p, o = m(), n = f(w), r = () => c(o, { ...e, theme: e.theme || n.value });
    return u(r), l(r), d(n, (t) => {
      c(o, { theme: e.theme || t });
    }), (t, x) => (i(), h(_(y(a)), {
      ref_key: "pdsComponentRef",
      ref: o
    }, {
      default: C(() => [
        g(t.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  R as default
};
