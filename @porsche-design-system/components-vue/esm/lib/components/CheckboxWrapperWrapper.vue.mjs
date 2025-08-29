import { defineComponent as f, ref as c, inject as l, onMounted as m, onUpdated as d, watch as u, openBlock as h, createBlock as i, resolveDynamicComponent as C, unref as _, withCtx as y, renderSlot as b } from "vue";
import { usePrefix as k, themeInjectionKey as x, syncProperties as r } from "../../utils.mjs";
const P = /* @__PURE__ */ f({
  __name: "CheckboxWrapperWrapper",
  props: {
    hideLabel: { default: !1 },
    label: { default: "" },
    loading: { type: Boolean, default: !1 },
    message: { default: "" },
    state: { default: "none" },
    theme: {}
  },
  setup(p) {
    const s = k("p-checkbox-wrapper"), e = p, t = c(), n = l(x), a = () => r(t, { ...e, theme: e.theme || n.value });
    return m(a), d(a), u(n, (o) => {
      r(t, { theme: e.theme || o });
    }), (o, w) => (h(), i(C(_(s)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: y(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
