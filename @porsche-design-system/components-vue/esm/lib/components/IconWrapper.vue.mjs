import { defineComponent as m, ref as s, inject as f, onMounted as l, onUpdated as i, watch as u, openBlock as d, createBlock as h, resolveDynamicComponent as y, unref as _ } from "vue";
import { usePrefix as C, themeInjectionKey as k, syncProperties as p } from "../../utils.mjs";
const P = /* @__PURE__ */ m({
  __name: "IconWrapper",
  props: {
    aria: {},
    color: { default: "primary" },
    lazy: { type: Boolean },
    name: { default: "arrow-right" },
    size: { default: "small" },
    source: {},
    theme: {}
  },
  setup(a) {
    const c = C("p-icon"), e = a, o = s(), t = f(k), n = () => p(o, { ...e, theme: e.theme || t.value });
    return l(n), i(n), u(t, (r) => {
      p(o, { theme: e.theme || r });
    }), (r, w) => (d(), h(y(_(c)), {
      ref_key: "pdsComponentRef",
      ref: o
    }, null, 512));
  }
});
export {
  P as default
};
