import { defineComponent as p, ref as f, inject as m, onMounted as c, onUpdated as u, watch as d, openBlock as i, createBlock as h, resolveDynamicComponent as y, unref as _, withCtx as C, renderSlot as B } from "vue";
import { usePrefix as P, themeInjectionKey as g, syncProperties as a } from "../../utils.mjs";
const R = /* @__PURE__ */ p({
  __name: "ModelSignatureWrapper",
  props: {
    color: { default: "primary" },
    fetchPriority: { default: "auto" },
    lazy: { type: Boolean, default: !1 },
    model: { default: "911" },
    safeZone: { type: Boolean, default: !0 },
    size: { default: "small" },
    theme: {}
  },
  setup(s) {
    const l = P("p-model-signature"), e = s, t = f(), n = m(g), r = () => a(t, { ...e, theme: e.theme || n.value });
    return c(r), u(r), d(n, (o) => {
      a(t, { theme: e.theme || o });
    }), (o, k) => (i(), h(y(_(l)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: C(() => [
        B(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  R as default
};
