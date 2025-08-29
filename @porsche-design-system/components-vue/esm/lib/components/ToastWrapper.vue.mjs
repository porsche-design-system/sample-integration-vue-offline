import { defineComponent as m, ref as a, inject as f, onMounted as h, onUpdated as i, watch as u, openBlock as d, createBlock as l, resolveDynamicComponent as _, unref as y } from "vue";
import { usePrefix as C, themeInjectionKey as k, syncProperties as p } from "../../utils.mjs";
const j = /* @__PURE__ */ m({
  __name: "ToastWrapper",
  props: {
    theme: {}
  },
  setup(s) {
    const c = C("p-toast"), e = s, t = a(), o = f(k), n = () => p(t, { ...e, theme: e.theme || o.value });
    return h(n), i(n), u(o, (r) => {
      p(t, { theme: e.theme || r });
    }), (r, x) => (d(), l(_(y(c)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, null, 512));
  }
});
export {
  j as default
};
