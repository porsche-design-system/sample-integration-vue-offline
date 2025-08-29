import { defineComponent as u, ref as m, inject as c, onMounted as i, onUpdated as h, watch as y, openBlock as C, createBlock as B, resolveDynamicComponent as _, unref as b, withCtx as g, renderSlot as x } from "vue";
import { usePrefix as v, themeInjectionKey as w, addEventListenerToElementRef as n, syncProperties as s } from "../../utils.mjs";
const P = /* @__PURE__ */ u({
  __name: "TextareaWrapper",
  props: {
    autoComplete: {},
    counter: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { default: !1 },
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
  emits: ["blur", "change", "input"],
  setup(f, { emit: p }) {
    const d = v("p-textarea"), t = f, e = m(), a = p, l = c(w), r = () => s(e, { ...t, theme: t.theme || l.value });
    return i(() => {
      r(), n(e, "blur", a), n(e, "change", a), n(e, "input", a);
    }), h(r), y(l, (o) => {
      s(e, { theme: t.theme || o });
    }), (o, k) => (C(), B(_(b(d)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: g(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
