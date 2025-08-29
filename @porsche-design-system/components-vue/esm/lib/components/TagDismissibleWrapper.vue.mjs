import { defineComponent as c, ref as m, inject as f, onMounted as i, onUpdated as l, watch as d, openBlock as u, createBlock as h, resolveDynamicComponent as _, unref as C, withCtx as b, renderSlot as y } from "vue";
import { usePrefix as g, themeInjectionKey as k, syncProperties as s } from "../../utils.mjs";
const R = /* @__PURE__ */ c({
  __name: "TagDismissibleWrapper",
  props: {
    aria: {},
    color: { default: "background-surface" },
    label: {},
    theme: {}
  },
  setup(a) {
    const p = g("p-tag-dismissible"), e = a, t = m(), n = f(k), r = () => s(t, { ...e, theme: e.theme || n.value });
    return i(r), l(r), d(n, (o) => {
      s(t, { theme: e.theme || o });
    }), (o, w) => (u(), h(_(C(p)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: b(() => [
        y(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  R as default
};
