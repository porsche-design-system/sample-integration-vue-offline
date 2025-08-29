import { defineComponent as c, ref as m, inject as f, onMounted as d, onUpdated as u, watch as l, openBlock as h, createBlock as i, resolveDynamicComponent as C, unref as _, withCtx as w, renderSlot as y } from "vue";
import { usePrefix as k, themeInjectionKey as x, syncProperties as p } from "../../utils.mjs";
const g = /* @__PURE__ */ c({
  __name: "ContentWrapperWrapper",
  props: {
    backgroundColor: { default: "transparent" },
    theme: {},
    width: { default: "extended" }
  },
  setup(s) {
    const a = k("p-content-wrapper"), e = s, t = m(), o = f(x), r = () => p(t, { ...e, theme: e.theme || o.value });
    return d(r), u(r), l(o, (n) => {
      p(t, { theme: e.theme || n });
    }), (n, P) => (h(), i(C(_(a)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: w(() => [
        y(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  g as default
};
