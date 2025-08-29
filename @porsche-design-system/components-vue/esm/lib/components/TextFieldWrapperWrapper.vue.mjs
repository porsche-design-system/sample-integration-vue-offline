import { defineComponent as i, ref as u, inject as d, onMounted as c, onUpdated as m, watch as h, openBlock as y, createBlock as C, resolveDynamicComponent as w, unref as B, withCtx as _, renderSlot as x } from "vue";
import { usePrefix as g, themeInjectionKey as P, addEventListenerToElementRef as b, syncProperties as r } from "../../utils.mjs";
const v = /* @__PURE__ */ i({
  __name: "TextFieldWrapperWrapper",
  props: {
    actionIcon: {},
    actionLoading: { type: Boolean, default: !1 },
    description: { default: "" },
    hideLabel: { default: !1 },
    label: { default: "" },
    message: { default: "" },
    showCharacterCount: { type: Boolean },
    showCounter: { type: Boolean, default: !0 },
    showPasswordToggle: { type: Boolean, default: !0 },
    state: { default: "none" },
    submitButton: { type: Boolean, default: !0 },
    theme: {},
    unit: { default: "" },
    unitPosition: { default: "prefix" }
  },
  emits: ["action"],
  setup(s, { emit: l }) {
    const p = g("p-text-field-wrapper"), t = s, e = u(), f = l, n = d(P), a = () => r(e, { ...t, theme: t.theme || n.value });
    return c(() => {
      a(), b(e, "action", f);
    }), m(a), h(n, (o) => {
      r(e, { theme: t.theme || o });
    }), (o, R) => (y(), C(w(B(p)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: _(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  v as default
};
