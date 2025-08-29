import { defineComponent as u, ref as c, inject as m, onMounted as i, onUpdated as h, watch as y, openBlock as B, createBlock as C, resolveDynamicComponent as _, unref as b, withCtx as g, renderSlot as v } from "vue";
import { usePrefix as R, themeInjectionKey as k, addEventListenerToElementRef as n, syncProperties as r } from "../../utils.mjs";
const j = /* @__PURE__ */ u({
  __name: "InputSearchWrapper",
  props: {
    autoComplete: {},
    clear: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { default: !1 },
    indicator: { type: Boolean, default: !1 },
    label: { default: "" },
    loading: { type: Boolean, default: !1 },
    message: { default: "" },
    name: {},
    placeholder: { default: "" },
    readOnly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    theme: {},
    value: { default: "" }
  },
  emits: ["blur", "change", "input"],
  setup(s, { emit: p }) {
    const d = R("p-input-search"), t = s, e = c(), a = p, l = m(k), f = () => r(e, { ...t, theme: t.theme || l.value });
    return i(() => {
      f(), n(e, "blur", a), n(e, "change", a), n(e, "input", a);
    }), h(f), y(l, (o) => {
      r(e, { theme: t.theme || o });
    }), (o, w) => (B(), C(_(b(d)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: g(() => [
        v(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
