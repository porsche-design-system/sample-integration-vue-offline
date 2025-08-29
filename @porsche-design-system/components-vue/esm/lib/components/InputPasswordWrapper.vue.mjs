import { defineComponent as u, ref as m, inject as c, onMounted as i, onUpdated as h, watch as y, openBlock as g, createBlock as B, resolveDynamicComponent as C, unref as _, withCtx as b, renderSlot as w } from "vue";
import { usePrefix as v, themeInjectionKey as x, addEventListenerToElementRef as n, syncProperties as f } from "../../utils.mjs";
const k = /* @__PURE__ */ u({
  __name: "InputPasswordWrapper",
  props: {
    autoComplete: {},
    compact: { type: Boolean, default: !1 },
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
    state: { default: "none" },
    theme: {},
    toggle: { type: Boolean, default: !1 },
    value: { default: "" }
  },
  emits: ["blur", "change", "input"],
  setup(p, { emit: r }) {
    const d = v("p-input-password"), t = p, e = m(), o = r, l = c(x), s = () => f(e, { ...t, theme: t.theme || l.value });
    return i(() => {
      s(), n(e, "blur", o), n(e, "change", o), n(e, "input", o);
    }), h(s), y(l, (a) => {
      f(e, { theme: t.theme || a });
    }), (a, L) => (g(), B(C(_(d)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: b(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  k as default
};
