import { defineComponent as d, ref as m, inject as c, onMounted as i, onUpdated as h, watch as y, createBlock as B, openBlock as b, resolveDynamicComponent as v, unref as C, withCtx as _, renderSlot as g } from "vue";
import { usePrefix as x, themeInjectionKey as R, syncProperties as s, addEventListenerToElementRef as o } from "../../utils.mjs";
const P = /* @__PURE__ */ d({
  __name: "InputMonthWrapper",
  props: {
    autoComplete: {},
    compact: { type: Boolean, default: !1 },
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
    readOnly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    step: { default: 1 },
    theme: {},
    value: { default: "" }
  },
  emits: ["update:value", "blur", "change", "input"],
  setup(u, { emit: f }) {
    const r = x("p-input-month"), n = u, e = m(), a = f, l = c(R), p = () => s(e, { ...n, theme: n.theme || l.value });
    return i(() => {
      p(), o(e, "blur", a), o(e, "change", a), o(e, "input", a, (t) => {
        a("update:value", t.target.value);
      });
    }), h(p), y(l, (t) => {
      s(e, { theme: n.theme || t });
    }), (t, j) => (b(), B(v(C(r)), {
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
