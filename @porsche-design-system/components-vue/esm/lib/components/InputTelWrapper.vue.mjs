import { defineComponent as u, ref as m, inject as c, onMounted as i, onUpdated as h, watch as y, openBlock as B, createBlock as g, resolveDynamicComponent as C, unref as _, withCtx as b, renderSlot as v } from "vue";
import { usePrefix as x, themeInjectionKey as L, addEventListenerToElementRef as o, syncProperties as p } from "../../utils.mjs";
const P = /* @__PURE__ */ u({
  __name: "InputTelWrapper",
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
  setup(r, { emit: s }) {
    const d = x("p-input-tel"), t = r, e = m(), n = s, l = c(L), f = () => p(e, { ...t, theme: t.theme || l.value });
    return i(() => {
      f(), o(e, "blur", n), o(e, "change", n), o(e, "input", n);
    }), h(f), y(l, (a) => {
      p(e, { theme: t.theme || a });
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
