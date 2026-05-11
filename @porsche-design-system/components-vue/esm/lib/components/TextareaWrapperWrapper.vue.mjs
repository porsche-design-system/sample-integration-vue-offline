import { defineComponent as f, ref as l, inject as c, onMounted as m, onUpdated as u, watch as d, createBlock as h, openBlock as i, resolveDynamicComponent as C, unref as y, withCtx as _, renderSlot as w } from "vue";
import { usePrefix as x, themeInjectionKey as B, syncProperties as r } from "../../utils.mjs";
const P = /* @__PURE__ */ f({
  __name: "TextareaWrapperWrapper",
  props: {
    description: { default: "" },
    hideLabel: { type: [Boolean, Object], default: !1 },
    label: { default: "" },
    message: { default: "" },
    showCharacterCount: { type: Boolean },
    showCounter: { type: Boolean, default: !0 },
    state: { default: "none" },
    theme: {}
  },
  setup(p) {
    const s = x("p-textarea-wrapper"), e = p, t = l(), n = c(B), a = () => r(t, { ...e, theme: e.theme || n.value });
    return m(a), u(a), d(n, (o) => {
      r(t, { theme: e.theme || o });
    }), (o, b) => (i(), h(C(y(s)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: _(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
