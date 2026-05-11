import { defineComponent as f, ref as l, inject as m, onMounted as c, onUpdated as d, watch as u, createBlock as i, openBlock as h, resolveDynamicComponent as y, unref as _, withCtx as C, renderSlot as b } from "vue";
import { usePrefix as B, themeInjectionKey as w, syncProperties as r } from "../../utils.mjs";
const k = /* @__PURE__ */ f({
  __name: "RadioButtonWrapperWrapper",
  props: {
    hideLabel: { type: [Boolean, Object], default: !1 },
    label: { default: "" },
    loading: { type: Boolean, default: !1 },
    message: { default: "" },
    state: { default: "none" },
    theme: {}
  },
  setup(p) {
    const s = B("p-radio-button-wrapper"), e = p, t = l(), n = m(w), a = () => r(t, { ...e, theme: e.theme || n.value });
    return c(a), d(a), u(n, (o) => {
      r(t, { theme: e.theme || o });
    }), (o, R) => (h(), i(y(_(s)), {
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
  k as default
};
