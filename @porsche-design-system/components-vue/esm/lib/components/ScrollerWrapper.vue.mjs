import { defineComponent as a, ref as p, inject as i, onMounted as m, onUpdated as f, watch as d, openBlock as u, createBlock as h, resolveDynamicComponent as C, unref as _, withCtx as y, renderSlot as P } from "vue";
import { usePrefix as g, themeInjectionKey as S, syncProperties as c } from "../../utils.mjs";
const B = /* @__PURE__ */ a({
  __name: "ScrollerWrapper",
  props: {
    alignScrollIndicator: { default: "center" },
    aria: {},
    gradientColor: {},
    gradientColorScheme: {},
    scrollIndicatorPosition: {},
    scrollToPosition: {},
    scrollbar: { type: Boolean, default: !1 },
    theme: {}
  },
  setup(l) {
    const s = g("p-scroller"), e = l, o = p(), n = i(S), r = () => c(o, { ...e, theme: e.theme || n.value });
    return m(r), f(r), d(n, (t) => {
      c(o, { theme: e.theme || t });
    }), (t, k) => (u(), h(C(_(s)), {
      ref_key: "pdsComponentRef",
      ref: o
    }, {
      default: y(() => [
        P(t.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  B as default
};
