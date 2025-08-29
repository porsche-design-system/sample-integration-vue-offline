import { defineComponent as u, ref as m, inject as c, onMounted as i, onUpdated as h, watch as y, openBlock as B, createBlock as C, resolveDynamicComponent as g, unref as _, withCtx as b, renderSlot as x } from "vue";
import { usePrefix as k, themeInjectionKey as v, addEventListenerToElementRef as a, syncProperties as f } from "../../utils.mjs";
const P = /* @__PURE__ */ u({
  __name: "InputTextWrapper",
  props: {
    autoComplete: {},
    compact: { type: Boolean, default: !1 },
    counter: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { default: !1 },
    label: { default: "" },
    loading: { type: Boolean, default: !1 },
    maxLength: {},
    message: { default: "" },
    minLength: {},
    name: {},
    placeholder: { default: "" },
    readOnly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    spellCheck: { type: Boolean },
    state: { default: "none" },
    theme: {},
    value: { default: "" }
  },
  emits: ["blur", "change", "input"],
  setup(s, { emit: r }) {
    const d = k("p-input-text"), t = s, e = m(), n = r, l = c(v), p = () => f(e, { ...t, theme: t.theme || l.value });
    return i(() => {
      p(), a(e, "blur", n), a(e, "change", n), a(e, "input", n);
    }), h(p), y(l, (o) => {
      f(e, { theme: t.theme || o });
    }), (o, L) => (B(), C(g(_(d)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: b(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
