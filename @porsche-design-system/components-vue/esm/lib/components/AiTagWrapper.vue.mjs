import { defineComponent as m, ref as s, inject as f, onMounted as i, onUpdated as l, watch as u, createBlock as d, openBlock as h, resolveDynamicComponent as _, unref as y } from "vue";
import { usePrefix as C, themeInjectionKey as g, syncProperties as p } from "../../utils.mjs";
const P = /* @__PURE__ */ m({
  __name: "AiTagWrapper",
  props: {
    locale: { default: "en_US" },
    theme: {},
    variant: { default: "generated" }
  },
  setup(a) {
    const c = C("p-ai-tag"), e = a, t = s(), n = f(g), o = () => p(t, { ...e, theme: e.theme || n.value });
    return i(o), l(o), u(n, (r) => {
      p(t, { theme: e.theme || r });
    }), (r, k) => (h(), d(_(y(c)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, null, 512));
  }
});
export {
  P as default
};
