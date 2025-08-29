import { defineComponent as l, ref as f, inject as m, onMounted as c, onUpdated as i, watch as d, openBlock as u, createBlock as h, resolveDynamicComponent as y, unref as _, withCtx as C, renderSlot as g } from "vue";
import { usePrefix as k, themeInjectionKey as w, syncProperties as s } from "../../utils.mjs";
const R = /* @__PURE__ */ l({
  __name: "DisplayWrapper",
  props: {
    align: { default: "start" },
    color: { default: "primary" },
    ellipsis: { type: Boolean, default: !1 },
    size: { default: "large" },
    tag: {},
    theme: {}
  },
  setup(a) {
    const p = k("p-display"), e = a, t = f(), n = m(w), r = () => s(t, { ...e, theme: e.theme || n.value });
    return c(r), i(r), d(n, (o) => {
      s(t, { theme: e.theme || o });
    }), (o, x) => (u(), h(y(_(p)), {
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
