import { defineComponent as r, ref as u, inject as m, onMounted as i, onUpdated as h, watch as y, createBlock as b, openBlock as k, resolveDynamicComponent as B, unref as C, withCtx as _, renderSlot as g } from "vue";
import { usePrefix as x, themeInjectionKey as v, syncProperties as f, addEventListenerToElementRef as n } from "../../utils.mjs";
const P = /* @__PURE__ */ r({
  __name: "CheckboxWrapper",
  props: {
    checked: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { type: [Boolean, Object], default: !1 },
    indeterminate: { type: Boolean, default: !1 },
    label: { default: "" },
    loading: { type: Boolean, default: !1 },
    message: { default: "" },
    name: { default: "" },
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    theme: {},
    value: { default: "on" }
  },
  emits: ["update:checked", "blur", "change", "update"],
  setup(c, { emit: s }) {
    const p = x("p-checkbox"), o = c, e = u(), a = s, l = m(v), d = () => f(e, { ...o, theme: o.theme || l.value });
    return i(() => {
      d(), n(e, "blur", a), n(e, "change", a, (t) => {
        a("update:checked", t.target.checked);
      }), n(e, "update", a);
    }), h(d), y(l, (t) => {
      f(e, { theme: o.theme || t });
    }), (t, R) => (k(), b(B(C(p)), {
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
