import { defineComponent as d, ref as m, inject as c, onMounted as i, onUpdated as h, watch as y, openBlock as b, createBlock as B, resolveDynamicComponent as C, unref as _, withCtx as g, renderSlot as v } from "vue";
import { usePrefix as x, themeInjectionKey as R, addEventListenerToElementRef as a, syncProperties as s } from "../../utils.mjs";
const j = /* @__PURE__ */ d({
  __name: "InputNumberWrapper",
  props: {
    autoComplete: {},
    compact: { type: Boolean, default: !1 },
    controls: { type: Boolean, default: !1 },
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
    placeholder: { default: "" },
    readOnly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    step: { default: 1 },
    theme: {},
    value: { default: "" }
  },
  emits: ["blur", "change", "input"],
  setup(p, { emit: r }) {
    const u = x("p-input-number"), t = p, e = m(), o = r, l = c(R), f = () => s(e, { ...t, theme: t.theme || l.value });
    return i(() => {
      f(), a(e, "blur", o), a(e, "change", o), a(e, "input", o);
    }), h(f), y(l, (n) => {
      s(e, { theme: t.theme || n });
    }), (n, k) => (b(), B(C(_(u)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: g(() => [
        v(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
