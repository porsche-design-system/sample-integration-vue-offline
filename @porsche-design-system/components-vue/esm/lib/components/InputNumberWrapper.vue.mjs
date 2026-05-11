import { defineComponent as d, ref as m, inject as c, onMounted as i, onUpdated as h, watch as y, createBlock as b, openBlock as B, resolveDynamicComponent as v, unref as C, withCtx as _, renderSlot as g } from "vue";
import { usePrefix as x, themeInjectionKey as R, syncProperties as u, addEventListenerToElementRef as n } from "../../utils.mjs";
const P = /* @__PURE__ */ d({
  __name: "InputNumberWrapper",
  props: {
    autoComplete: {},
    compact: { type: Boolean, default: !1 },
    controls: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { type: [Boolean, Object], default: !1 },
    label: { default: "" },
    loading: { type: Boolean, default: !1 },
    max: {},
    message: { default: "" },
    min: {},
    name: {},
    placeholder: { default: "" },
    readOnly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    step: { default: 1 },
    theme: {},
    value: { default: "" }
  },
  emits: ["update:value", "blur", "change", "input"],
  setup(f, { emit: r }) {
    const s = x("p-input-number"), o = f, e = m(), a = r, l = c(R), p = () => u(e, { ...o, theme: o.theme || l.value });
    return i(() => {
      p(), n(e, "blur", a), n(e, "change", a), n(e, "input", a, (t) => {
        a("update:value", t.target.value);
      });
    }), h(p), y(l, (t) => {
      u(e, { theme: o.theme || t });
    }), (t, j) => (B(), b(v(C(s)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: _(() => [
        g(t.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
