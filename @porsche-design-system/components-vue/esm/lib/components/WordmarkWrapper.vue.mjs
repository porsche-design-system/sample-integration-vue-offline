import { defineComponent as a, ref as c, inject as f, onMounted as l, onUpdated as d, watch as i, openBlock as u, createBlock as h, resolveDynamicComponent as _, unref as k } from "vue";
import { usePrefix as y, themeInjectionKey as C, syncProperties as m } from "../../utils.mjs";
const R = /* @__PURE__ */ a({
  __name: "WordmarkWrapper",
  props: {
    aria: {},
    href: {},
    size: { default: "small" },
    target: { default: "_self" },
    theme: {}
  },
  setup(p) {
    const s = y("p-wordmark"), e = p, t = c(), o = f(C), n = () => m(t, { ...e, theme: e.theme || o.value });
    return l(n), d(n), i(o, (r) => {
      m(t, { theme: e.theme || r });
    }), (r, w) => (u(), h(_(k(s)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, null, 512));
  }
});
export {
  R as default
};
