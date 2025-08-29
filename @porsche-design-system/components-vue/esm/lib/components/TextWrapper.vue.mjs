import { defineComponent as l, ref as f, inject as m, onMounted as c, onUpdated as u, watch as d, openBlock as i, createBlock as h, resolveDynamicComponent as y, unref as _, withCtx as C, renderSlot as g } from "vue";
import { usePrefix as x, themeInjectionKey as w, syncProperties as a } from "../../utils.mjs";
const R = /* @__PURE__ */ l({
  __name: "TextWrapper",
  props: {
    align: { default: "start" },
    color: { default: "primary" },
    ellipsis: { type: Boolean, default: !1 },
    size: { default: "small" },
    tag: { default: "p" },
    theme: {},
    weight: { default: "regular" }
  },
  setup(s) {
    const p = x("p-text"), e = s, t = f(), n = m(w), r = () => a(t, { ...e, theme: e.theme || n.value });
    return c(r), u(r), d(n, (o) => {
      a(t, { theme: e.theme || o });
    }), (o, k) => (i(), h(y(_(p)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: C(() => [
        g(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  R as default
};
