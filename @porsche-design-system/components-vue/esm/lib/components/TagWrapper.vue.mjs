import { defineComponent as s, ref as m, inject as f, onMounted as u, onUpdated as l, watch as d, createBlock as i, openBlock as h, resolveDynamicComponent as _, unref as y, withCtx as C, renderSlot as g } from "vue";
import { usePrefix as k, themeInjectionKey as v, syncProperties as c } from "../../utils.mjs";
const P = /* @__PURE__ */ s({
  __name: "TagWrapper",
  props: {
    color: { default: "background-surface" },
    compact: { type: Boolean, default: !1 },
    icon: {},
    iconSource: {},
    theme: {},
    variant: {}
  },
  setup(a) {
    const p = k("p-tag"), e = a, o = m(), n = f(v), r = () => c(o, { ...e, theme: e.theme || n.value });
    return u(r), l(r), d(n, (t) => {
      c(o, { theme: e.theme || t });
    }), (t, w) => (h(), i(_(y(p)), {
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
  P as default
};
