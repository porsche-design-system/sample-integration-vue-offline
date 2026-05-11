import { defineComponent as i, ref as u, inject as d, onMounted as c, onUpdated as m, watch as h, createBlock as y, openBlock as B, resolveDynamicComponent as C, unref as w, withCtx as _, renderSlot as x } from "vue";
import { usePrefix as b, themeInjectionKey as g, syncProperties as r, addEventListenerToElementRef as P } from "../../utils.mjs";
const k = /* @__PURE__ */ i({
  __name: "TextFieldWrapperWrapper",
  props: {
    actionIcon: {},
    actionLoading: { type: Boolean, default: !1 },
    description: { default: "" },
    hideLabel: { type: [Boolean, Object], default: !1 },
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
    const p = b("p-text-field-wrapper"), t = s, e = u(), f = l, n = d(g), a = () => r(e, { ...t, theme: t.theme || n.value });
    return c(() => {
      a(), P(e, "action", f);
    }), m(a), h(n, (o) => {
      r(e, { theme: t.theme || o });
    }), (o, R) => (B(), y(C(w(p)), {
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
  k as default
};
