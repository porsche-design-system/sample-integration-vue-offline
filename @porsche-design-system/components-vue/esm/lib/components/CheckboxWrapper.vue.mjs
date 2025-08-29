import { defineComponent as m, ref as u, inject as c, onMounted as i, onUpdated as h, watch as y, openBlock as b, createBlock as B, resolveDynamicComponent as C, unref as _, withCtx as k, renderSlot as x } from "vue";
import { usePrefix as v, themeInjectionKey as R, addEventListenerToElementRef as f, syncProperties as s } from "../../utils.mjs";
const j = /* @__PURE__ */ m({
  __name: "CheckboxWrapper",
  props: {
    checked: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { default: !1 },
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
  emits: ["blur", "update"],
  setup(d, { emit: r }) {
    const p = v("p-checkbox"), t = d, e = u(), a = r, n = c(R), l = () => s(e, { ...t, theme: t.theme || n.value });
    return i(() => {
      l(), f(e, "blur", a), f(e, "update", a);
    }), h(l), y(n, (o) => {
      s(e, { theme: t.theme || o });
    }), (o, g) => (b(), B(C(_(p)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: k(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
