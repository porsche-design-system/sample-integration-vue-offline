import { defineComponent as r, ref as m, inject as i, onMounted as h, onUpdated as u, watch as y, openBlock as C, createBlock as w, resolveDynamicComponent as _, unref as B, withCtx as g, renderSlot as b } from "vue";
import { usePrefix as k, themeInjectionKey as R, addEventListenerToElementRef as l, syncProperties as f } from "../../utils.mjs";
const P = /* @__PURE__ */ r({
  __name: "SwitchWrapper",
  props: {
    alignLabel: { default: "end" },
    checked: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    hideLabel: { default: !1 },
    loading: { type: Boolean, default: !1 },
    stretch: { default: !1 },
    theme: {}
  },
  emits: ["switchChange", "update"],
  setup(p, { emit: c }) {
    const d = k("p-switch"), t = p, e = m(), n = c, a = i(R), s = () => f(e, { ...t, theme: t.theme || a.value });
    return h(() => {
      s(), l(e, "switchChange", n), l(e, "update", n);
    }), u(s), y(a, (o) => {
      f(e, { theme: t.theme || o });
    }), (o, v) => (C(), w(_(B(d)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: g(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
