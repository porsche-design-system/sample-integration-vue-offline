import { defineComponent as s, ref as l, inject as m, onMounted as c, onUpdated as u, watch as d, openBlock as i, createBlock as h, resolveDynamicComponent as y, unref as _, withCtx as C, renderSlot as b } from "vue";
import { usePrefix as B, themeInjectionKey as v, syncProperties as r } from "../../utils.mjs";
const P = /* @__PURE__ */ s({
  __name: "ButtonWrapper",
  props: {
    aria: {},
    compact: { default: !1 },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { default: !1 },
    icon: { default: "none" },
    iconSource: {},
    loading: { type: Boolean, default: !1 },
    name: {},
    theme: {},
    type: { default: "submit" },
    value: {},
    variant: { default: "primary" }
  },
  setup(f) {
    const p = B("p-button"), e = f, t = l(), n = m(v), a = () => r(t, { ...e, theme: e.theme || n.value });
    return c(a), u(a), d(n, (o) => {
      r(t, { theme: e.theme || o });
    }), (o, k) => (i(), h(y(_(p)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: C(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
