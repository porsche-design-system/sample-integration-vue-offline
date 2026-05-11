import { defineComponent as f, ref as c, inject as m, onMounted as i, onUpdated as h, watch as g, createBlock as y, openBlock as b, resolveDynamicComponent as v, unref as _, withCtx as B, renderSlot as C } from "vue";
import { usePrefix as w, themeInjectionKey as R, syncProperties as s, addEventListenerToElementRef as a } from "../../utils.mjs";
const P = /* @__PURE__ */ f({
  __name: "MultiSelectWrapper",
  props: {
    compact: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    dropdownDirection: { default: "auto" },
    form: {},
    hideLabel: { type: [Boolean, Object], default: !1 },
    label: { default: "" },
    message: { default: "" },
    name: {},
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    theme: {},
    value: { default: () => [] }
  },
  emits: ["update:value", "blur", "change", "toggle", "update"],
  setup(u, { emit: d }) {
    const p = w("p-multi-select"), n = u, e = c(), t = d, l = m(R), r = () => s(e, { ...n, theme: n.theme || l.value });
    return i(() => {
      r(), a(e, "blur", t), a(e, "change", t, (o) => {
        t("update:value", o.target.value);
      }), a(e, "toggle", t), a(e, "update", t);
    }), h(r), g(l, (o) => {
      s(e, { theme: n.theme || o });
    }), (o, j) => (b(), y(v(_(p)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: B(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
