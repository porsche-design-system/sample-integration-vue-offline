import { defineComponent as f, ref as l, inject as m, onMounted as c, onUpdated as i, watch as d, openBlock as u, createBlock as h, resolveDynamicComponent as y, unref as _, withCtx as g, renderSlot as C } from "vue";
import { usePrefix as x, themeInjectionKey as k, syncProperties as a } from "../../utils.mjs";
const R = /* @__PURE__ */ f({
  __name: "HeadingWrapper",
  props: {
    align: { default: "start" },
    color: { default: "primary" },
    ellipsis: { type: Boolean, default: !1 },
    size: { default: "xx-large" },
    tag: {},
    theme: {}
  },
  setup(s) {
    const p = x("p-heading"), e = s, t = l(), n = m(k), r = () => a(t, { ...e, theme: e.theme || n.value });
    return c(r), i(r), d(n, (o) => {
      a(t, { theme: e.theme || o });
    }), (o, w) => (u(), h(y(_(p)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  R as default
};
