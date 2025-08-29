import { defineComponent as f, ref as l, inject as m, onMounted as d, onUpdated as c, watch as u, openBlock as i, createBlock as h, resolveDynamicComponent as _, unref as y, withCtx as C, renderSlot as b } from "vue";
import { usePrefix as w, themeInjectionKey as B, syncProperties as r } from "../../utils.mjs";
const x = /* @__PURE__ */ f({
  __name: "RadioButtonWrapperWrapper",
  props: {
    hideLabel: { default: !1 },
    label: { default: "" },
    loading: { type: Boolean, default: !1 },
    message: { default: "" },
    state: { default: "none" },
    theme: {}
  },
  setup(p) {
    const s = w("p-radio-button-wrapper"), e = p, t = l(), n = m(B), a = () => r(t, { ...e, theme: e.theme || n.value });
    return d(a), c(a), u(n, (o) => {
      r(t, { theme: e.theme || o });
    }), (o, R) => (i(), h(_(y(s)), {
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
  x as default
};
