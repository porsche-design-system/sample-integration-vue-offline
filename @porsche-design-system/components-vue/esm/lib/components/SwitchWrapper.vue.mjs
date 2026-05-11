import { defineComponent as r, ref as m, inject as i, onMounted as h, onUpdated as u, watch as y, createBlock as B, openBlock as C, resolveDynamicComponent as w, unref as _, withCtx as b, renderSlot as g } from "vue";
import { usePrefix as j, themeInjectionKey as k, syncProperties as l, addEventListenerToElementRef as p } from "../../utils.mjs";
const L = /* @__PURE__ */ r({
  __name: "SwitchWrapper",
  props: {
    alignLabel: { default: "end" },
    checked: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    hideLabel: { type: [Boolean, Object], default: !1 },
    loading: { type: Boolean, default: !1 },
    stretch: { type: [Boolean, Object], default: !1 },
    theme: {}
  },
  emits: ["switchChange", "update"],
  setup(c, { emit: f }) {
    const d = j("p-switch"), t = c, e = m(), n = f, a = i(k), s = () => l(e, { ...t, theme: t.theme || a.value });
    return h(() => {
      s(), p(e, "switchChange", n), p(e, "update", n);
    }), u(s), y(a, (o) => {
      l(e, { theme: t.theme || o });
    }), (o, R) => (C(), B(w(_(d)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: b(() => [
        g(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  L as default
};
