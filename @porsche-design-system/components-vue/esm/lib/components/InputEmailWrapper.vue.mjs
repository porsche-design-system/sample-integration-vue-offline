import { defineComponent as u, ref as m, inject as i, onMounted as c, onUpdated as h, watch as y, openBlock as B, createBlock as g, resolveDynamicComponent as C, unref as _, withCtx as b, renderSlot as v } from "vue";
import { usePrefix as x, themeInjectionKey as L, addEventListenerToElementRef as o, syncProperties as p } from "../../utils.mjs";
const E = /* @__PURE__ */ u({
  __name: "InputEmailWrapper",
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
    multiple: { type: Boolean, default: !1 },
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
  setup(s, { emit: r }) {
    const d = x("p-input-email"), t = s, e = m(), a = r, l = i(L), f = () => p(e, { ...t, theme: t.theme || l.value });
    return c(() => {
      f(), o(e, "blur", a), o(e, "change", a), o(e, "input", a);
    }), h(f), y(l, (n) => {
      p(e, { theme: t.theme || n });
    }), (n, R) => (B(), g(C(_(d)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: b(() => [
        v(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  E as default
};
