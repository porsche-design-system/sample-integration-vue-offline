import { defineComponent as d, ref as c, inject as m, onMounted as i, onUpdated as h, watch as y, createBlock as B, openBlock as g, resolveDynamicComponent as b, unref as v, withCtx as C, renderSlot as _ } from "vue";
import { usePrefix as x, themeInjectionKey as L, syncProperties as f, addEventListenerToElementRef as n } from "../../utils.mjs";
const w = /* @__PURE__ */ d({
  __name: "InputSearchWrapper",
  props: {
    autoComplete: {},
    clear: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { type: [Boolean, Object], default: !1 },
    indicator: { type: Boolean, default: !1 },
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
    value: { default: "" }
  },
  emits: ["update:value", "blur", "change", "input"],
  setup(r, { emit: s }) {
    const u = x("p-input-search"), o = r, e = c(), a = s, l = m(L), p = () => f(e, { ...o, theme: o.theme || l.value });
    return i(() => {
      p(), n(e, "blur", a), n(e, "change", a), n(e, "input", a, (t) => {
        a("update:value", t.target.value);
      });
    }), h(p), y(l, (t) => {
      f(e, { theme: o.theme || t });
    }), (t, R) => (g(), B(b(v(u)), {
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
  w as default
};
