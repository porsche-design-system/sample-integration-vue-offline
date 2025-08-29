import { defineComponent as p, ref as m, inject as u, onMounted as i, onUpdated as c, watch as h, openBlock as y, createBlock as C, resolveDynamicComponent as _, unref as b, withCtx as B, renderSlot as g } from "vue";
import { usePrefix as v, themeInjectionKey as P, addEventListenerToElementRef as R, syncProperties as l } from "../../utils.mjs";
const j = /* @__PURE__ */ p({
  __name: "PinCodeWrapper",
  props: {
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { default: !1 },
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
  emits: ["update"],
  setup(d, { emit: s }) {
    const f = v("p-pin-code"), t = d, e = m(), r = s, o = u(P), a = () => l(e, { ...t, theme: t.theme || o.value });
    return i(() => {
      a(), R(e, "update", r);
    }), c(a), h(o, (n) => {
      l(e, { theme: t.theme || n });
    }), (n, k) => (y(), C(_(b(f)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: B(() => [
        g(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
