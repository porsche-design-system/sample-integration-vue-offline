import { defineComponent as c, ref as m, inject as f, onMounted as l, onUpdated as i, watch as d, createBlock as u, openBlock as h, resolveDynamicComponent as _, unref as y, withCtx as C, renderSlot as b } from "vue";
import { usePrefix as g, themeInjectionKey as k, syncProperties as s } from "../../utils.mjs";
const P = /* @__PURE__ */ c({
  __name: "TagDismissibleWrapper",
  props: {
    aria: {},
    color: { default: "background-surface" },
    compact: { type: Boolean, default: !1 },
    label: {},
    theme: {}
  },
  setup(a) {
    const p = g("p-tag-dismissible"), e = a, t = m(), n = f(k), r = () => s(t, { ...e, theme: e.theme || n.value });
    return l(r), i(r), d(n, (o) => {
      s(t, { theme: e.theme || o });
    }), (o, w) => (h(), u(_(y(p)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: C(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
