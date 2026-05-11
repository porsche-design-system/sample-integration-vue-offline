import { defineComponent as u, ref as c, inject as m, onMounted as i, onUpdated as h, watch as y, createBlock as g, openBlock as b, resolveDynamicComponent as v, unref as B, withCtx as _, renderSlot as C } from "vue";
import { usePrefix as w, themeInjectionKey as R, syncProperties as s, addEventListenerToElementRef as a } from "../../utils.mjs";
const P = /* @__PURE__ */ u({
  __name: "SelectWrapper",
  props: {
    compact: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    dropdownDirection: { default: "auto" },
    filter: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { type: [Boolean, Object], default: !1 },
    label: { default: "" },
    message: { default: "" },
    name: {},
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    theme: {},
    value: {}
  },
  emits: ["update:value", "blur", "change", "toggle", "update"],
  setup(p, { emit: d }) {
    const f = w("p-select"), n = p, e = c(), t = d, l = m(R), r = () => s(e, { ...n, theme: n.theme || l.value });
    return i(() => {
      r(), a(e, "blur", t), a(e, "change", t, (o) => {
        t("update:value", o.target.value);
      }), a(e, "toggle", t), a(e, "update", t);
    }), h(r), y(l, (o) => {
      s(e, { theme: n.theme || o });
    }), (o, j) => (b(), g(v(B(f)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: _(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
