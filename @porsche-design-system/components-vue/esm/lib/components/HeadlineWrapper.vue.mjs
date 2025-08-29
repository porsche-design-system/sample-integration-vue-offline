import { defineComponent as l, ref as f, inject as m, onMounted as c, onUpdated as i, watch as d, openBlock as u, createBlock as h, resolveDynamicComponent as y, unref as _, withCtx as C, renderSlot as g } from "vue";
import { usePrefix as k, themeInjectionKey as v, syncProperties as a } from "../../utils.mjs";
const P = /* @__PURE__ */ l({
  __name: "HeadlineWrapper",
  props: {
    align: { default: "start" },
    color: { default: "primary" },
    ellipsis: { type: Boolean, default: !1 },
    tag: {},
    theme: {},
    variant: { default: "headline-1" }
  },
  setup(p) {
    const s = k("p-headline"), e = p, t = f(), o = m(v), r = () => a(t, { ...e, theme: e.theme || o.value });
    return c(r), i(r), d(o, (n) => {
      a(t, { theme: e.theme || n });
    }), (n, w) => (u(), h(y(_(s)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: C(() => [
        g(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
