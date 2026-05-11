import { defineComponent as d, ref as m, inject as c, onMounted as i, onUpdated as h, watch as y, createBlock as B, openBlock as g, resolveDynamicComponent as C, unref as b, withCtx as v, renderSlot as _ } from "vue";
import { usePrefix as x, themeInjectionKey as k, syncProperties as u, addEventListenerToElementRef as n } from "../../utils.mjs";
const w = /* @__PURE__ */ d({
  __name: "InputTextWrapper",
  props: {
    autoComplete: {},
    compact: { type: Boolean, default: !1 },
    counter: { type: Boolean, default: !1 },
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
    spellCheck: { type: Boolean },
    state: { default: "none" },
    theme: {},
    value: { default: "" }
  },
  emits: ["update:value", "blur", "change", "input"],
  setup(f, { emit: s }) {
    const r = x("p-input-text"), o = f, e = m(), a = s, l = c(k), p = () => u(e, { ...o, theme: o.theme || l.value });
    return i(() => {
      p(), n(e, "blur", a), n(e, "change", a), n(e, "input", a, (t) => {
        a("update:value", t.target.value);
      });
    }), h(p), y(l, (t) => {
      u(e, { theme: o.theme || t });
    }), (t, L) => (g(), B(C(b(r)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: v(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  w as default
};
