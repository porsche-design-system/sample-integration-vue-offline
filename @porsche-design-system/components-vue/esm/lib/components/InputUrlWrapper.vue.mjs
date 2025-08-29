import { defineComponent as u, ref as m, inject as c, onMounted as i, onUpdated as h, watch as y, openBlock as B, createBlock as g, resolveDynamicComponent as C, unref as _, withCtx as b, renderSlot as v } from "vue";
import { usePrefix as x, themeInjectionKey as L, addEventListenerToElementRef as o, syncProperties as f } from "../../utils.mjs";
const P = /* @__PURE__ */ u({
  __name: "InputUrlWrapper",
  props: {
    autoComplete: {},
    compact: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { default: !1 },
    indicator: { type: Boolean, default: !1 },
    label: { default: "" },
    loading: { type: Boolean, default: !1 },
    maxLength: {},
    message: { default: "" },
    minLength: {},
    name: {},
    pattern: {},
    placeholder: { default: "" },
    readOnly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    theme: {},
    value: { default: "" }
  },
  emits: ["blur", "change", "input"],
  setup(p, { emit: s }) {
    const d = x("p-input-url"), t = p, e = m(), n = s, l = c(L), r = () => f(e, { ...t, theme: t.theme || l.value });
    return i(() => {
      r(), o(e, "blur", n), o(e, "change", n), o(e, "input", n);
    }), h(r), y(l, (a) => {
      f(e, { theme: t.theme || a });
    }), (a, R) => (B(), g(C(_(d)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: b(() => [
        v(a.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
