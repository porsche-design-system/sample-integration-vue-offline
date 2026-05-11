import { defineComponent as s, ref as m, inject as c, onMounted as i, onUpdated as h, watch as y, createBlock as B, openBlock as g, resolveDynamicComponent as b, unref as v, withCtx as C, renderSlot as _ } from "vue";
import { usePrefix as x, themeInjectionKey as L, syncProperties as r, addEventListenerToElementRef as o } from "../../utils.mjs";
const w = /* @__PURE__ */ s({
  __name: "InputUrlWrapper",
  props: {
    autoComplete: {},
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
    pattern: {},
    placeholder: { default: "" },
    readOnly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    theme: {},
    value: { default: "" }
  },
  emits: ["update:value", "blur", "change", "input"],
  setup(u, { emit: f }) {
    const d = x("p-input-url"), n = u, e = m(), a = f, l = c(L), p = () => r(e, { ...n, theme: n.theme || l.value });
    return i(() => {
      p(), o(e, "blur", a), o(e, "change", a), o(e, "input", a, (t) => {
        a("update:value", t.target.value);
      });
    }), h(p), y(l, (t) => {
      r(e, { theme: n.theme || t });
    }), (t, R) => (g(), B(b(v(d)), {
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
