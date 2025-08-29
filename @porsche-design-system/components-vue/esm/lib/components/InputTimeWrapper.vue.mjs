import { defineComponent as d, ref as u, inject as i, onMounted as c, onUpdated as h, watch as y, openBlock as B, createBlock as C, resolveDynamicComponent as _, unref as b, withCtx as g, renderSlot as v } from "vue";
import { usePrefix as x, themeInjectionKey as R, addEventListenerToElementRef as a, syncProperties as f } from "../../utils.mjs";
const T = /* @__PURE__ */ d({
  __name: "InputTimeWrapper",
  props: {
    autoComplete: {},
    compact: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { default: !1 },
    label: { default: "" },
    loading: { type: Boolean, default: !1 },
    max: {},
    message: { default: "" },
    min: {},
    name: {},
    readOnly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    step: { default: 60 },
    theme: {},
    value: { default: "" }
  },
  emits: ["blur", "change", "input"],
  setup(p, { emit: r }) {
    const m = x("p-input-time"), t = p, e = u(), n = r, l = i(R), s = () => f(e, { ...t, theme: t.theme || l.value });
    return c(() => {
      s(), a(e, "blur", n), a(e, "change", n), a(e, "input", n);
    }), h(s), y(l, (o) => {
      f(e, { theme: t.theme || o });
    }), (o, k) => (B(), C(_(b(m)), {
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
  T as default
};
