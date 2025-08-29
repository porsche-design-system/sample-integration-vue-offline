import { defineComponent as u, ref as m, inject as c, onMounted as i, onUpdated as h, watch as y, openBlock as B, createBlock as C, resolveDynamicComponent as _, unref as b, withCtx as g, renderSlot as v } from "vue";
import { usePrefix as x, themeInjectionKey as R, addEventListenerToElementRef as o, syncProperties as f } from "../../utils.mjs";
const j = /* @__PURE__ */ u({
  __name: "InputDateWrapper",
  props: {
    autoComplete: {},
    compact: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { default: !1 },
    label: { default: "" },
    loading: { type: Boolean, default: !1 },
    max: {},
    message: { default: "" },
    min: {},
    name: {},
    readOnly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    step: { default: 1 },
    theme: {},
    value: { default: "" }
  },
  emits: ["blur", "change", "input"],
  setup(p, { emit: r }) {
    const d = x("p-input-date"), t = p, e = m(), n = r, l = c(R), s = () => f(e, { ...t, theme: t.theme || l.value });
    return i(() => {
      s(), o(e, "blur", n), o(e, "change", n), o(e, "input", n);
    }), h(s), y(l, (a) => {
      f(e, { theme: t.theme || a });
    }), (a, k) => (B(), C(_(b(d)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: g(() => [
        v(a.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
