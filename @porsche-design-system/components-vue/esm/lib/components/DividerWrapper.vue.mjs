import { defineComponent as m, ref as i, inject as a, onMounted as f, onUpdated as d, watch as l, openBlock as u, createBlock as h, resolveDynamicComponent as _, unref as y } from "vue";
import { usePrefix as C, themeInjectionKey as v, syncProperties as c } from "../../utils.mjs";
const P = /* @__PURE__ */ m({
  __name: "DividerWrapper",
  props: {
    color: { default: "contrast-low" },
    direction: { default: "horizontal" },
    orientation: {},
    theme: {}
  },
  setup(p) {
    const s = C("p-divider"), e = p, o = i(), t = a(v), n = () => c(o, { ...e, theme: e.theme || t.value });
    return f(n), d(n), l(t, (r) => {
      c(o, { theme: e.theme || r });
    }), (r, k) => (u(), h(_(y(s)), {
      ref_key: "pdsComponentRef",
      ref: o
    }, null, 512));
  }
});
export {
  P as default
};
