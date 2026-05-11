import { defineComponent as u, ref as m, inject as c, onMounted as i, onUpdated as h, watch as y, createBlock as b, openBlock as g, resolveDynamicComponent as v, unref as B, withCtx as _, renderSlot as C } from "vue";
import { usePrefix as R, themeInjectionKey as j, syncProperties as r, addEventListenerToElementRef as d } from "../../utils.mjs";
const P = /* @__PURE__ */ u({
  __name: "RadioGroupWrapper",
  props: {
    compact: { type: Boolean, default: !1 },
    description: { default: "" },
    direction: { default: "column" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { type: [Boolean, Object], default: !1 },
    label: { default: "" },
    loading: { type: Boolean, default: !1 },
    message: { default: "" },
    name: {},
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    theme: {},
    value: { default: "" }
  },
  emits: ["update:value", "blur", "change"],
  setup(s, { emit: f }) {
    const p = R("p-radio-group"), o = s, e = m(), a = f, n = c(j), l = () => r(e, { ...o, theme: o.theme || n.value });
    return i(() => {
      l(), d(e, "blur", a), d(e, "change", a, (t) => {
        a("update:value", t.target.value);
      });
    }), h(l), y(n, (t) => {
      r(e, { theme: o.theme || t });
    }), (t, k) => (g(), b(v(B(p)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: _(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
