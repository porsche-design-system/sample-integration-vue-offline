import { defineComponent as d, ref as m, inject as c, onMounted as i, onUpdated as h, watch as y, createBlock as B, openBlock as v, resolveDynamicComponent as C, unref as b, withCtx as g, renderSlot as _ } from "vue";
import { usePrefix as x, themeInjectionKey as w, syncProperties as f, addEventListenerToElementRef as n } from "../../utils.mjs";
const j = /* @__PURE__ */ d({
  __name: "TextareaWrapper",
  props: {
    autoComplete: {},
    compact: { type: Boolean, default: !1 },
    counter: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { type: [Boolean, Object], default: !1 },
    label: { default: "" },
    maxLength: {},
    message: { default: "" },
    minLength: {},
    name: {},
    placeholder: { default: "" },
    readOnly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    resize: { default: "vertical" },
    rows: { default: 7 },
    spellCheck: { type: Boolean },
    state: { default: "none" },
    theme: {},
    value: { default: "" },
    wrap: { default: "soft" }
  },
  emits: ["update:value", "blur", "change", "input"],
  setup(p, { emit: s }) {
    const u = x("p-textarea"), o = p, e = m(), a = s, l = c(w), r = () => f(e, { ...o, theme: o.theme || l.value });
    return i(() => {
      r(), n(e, "blur", a), n(e, "change", a), n(e, "input", a, (t) => {
        a("update:value", t.target.value);
      });
    }), h(r), y(l, (t) => {
      f(e, { theme: o.theme || t });
    }), (t, k) => (v(), B(C(b(u)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: g(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
