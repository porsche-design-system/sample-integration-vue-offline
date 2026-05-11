import { defineComponent as u, ref as m, inject as c, onMounted as i, onUpdated as h, watch as y, createBlock as b, openBlock as g, resolveDynamicComponent as v, unref as B, withCtx as C, renderSlot as _ } from "vue";
import { usePrefix as P, themeInjectionKey as R, syncProperties as p, addEventListenerToElementRef as n } from "../../utils.mjs";
const x = /* @__PURE__ */ u({
  __name: "PinCodeWrapper",
  props: {
    compact: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { type: [Boolean, Object], default: !1 },
    label: { default: "" },
    length: { default: 4 },
    loading: { type: Boolean, default: !1 },
    message: { default: "" },
    name: {},
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    theme: {},
    type: { default: "number" },
    value: { default: "" }
  },
  emits: ["update:value", "blur", "change", "update"],
  setup(f, { emit: r }) {
    const s = P("p-pin-code"), o = f, e = m(), a = r, l = c(R), d = () => p(e, { ...o, theme: o.theme || l.value });
    return i(() => {
      d(), n(e, "blur", a), n(e, "change", a, (t) => {
        a("update:value", t.target.value);
      }), n(e, "update", a);
    }), h(d), y(l, (t) => {
      p(e, { theme: o.theme || t });
    }), (t, j) => (g(), b(v(B(s)), {
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
  x as default
};
