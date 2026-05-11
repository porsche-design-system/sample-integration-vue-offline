import { defineComponent as u, ref as m, inject as c, onMounted as i, onUpdated as h, watch as y, createBlock as g, openBlock as B, resolveDynamicComponent as b, unref as v, withCtx as C, renderSlot as _ } from "vue";
import { usePrefix as w, themeInjectionKey as x, syncProperties as s, addEventListenerToElementRef as n } from "../../utils.mjs";
const j = /* @__PURE__ */ u({
  __name: "InputPasswordWrapper",
  props: {
    autoComplete: {},
    compact: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { type: [Boolean, Object], default: !1 },
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
  emits: ["update:value", "blur", "change", "input"],
  setup(d, { emit: f }) {
    const r = w("p-input-password"), o = d, e = m(), a = f, l = c(x), p = () => s(e, { ...o, theme: o.theme || l.value });
    return i(() => {
      p(), n(e, "blur", a), n(e, "change", a), n(e, "input", a, (t) => {
        a("update:value", t.target.value);
      });
    }), h(p), y(l, (t) => {
      s(e, { theme: o.theme || t });
    }), (t, L) => (B(), g(b(v(r)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: C(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
