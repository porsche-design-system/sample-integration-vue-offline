import { defineComponent as c, ref as a, inject as f, onMounted as i, onUpdated as l, watch as u, openBlock as h, createBlock as d, resolveDynamicComponent as _, unref as y } from "vue";
import { usePrefix as C, themeInjectionKey as k, syncProperties as p } from "../../utils.mjs";
const j = /* @__PURE__ */ c({
  __name: "SpinnerWrapper",
  props: {
    aria: {},
    size: { default: "small" },
    theme: {}
  },
  setup(s) {
    const m = C("p-spinner"), e = s, n = a(), t = f(k), o = () => p(n, { ...e, theme: e.theme || t.value });
    return i(o), l(o), u(t, (r) => {
      p(n, { theme: e.theme || r });
    }), (r, x) => (h(), d(_(y(m)), {
      ref_key: "pdsComponentRef",
      ref: n
    }, null, 512));
  }
});
export {
  j as default
};
