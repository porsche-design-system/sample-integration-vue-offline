import { defineComponent as f, ref as s, inject as c, onMounted as m, onUpdated as u, watch as d, createBlock as i, openBlock as h, resolveDynamicComponent as y, unref as b, withCtx as B, renderSlot as _ } from "vue";
import { usePrefix as C, themeInjectionKey as j, syncProperties as r } from "../../utils.mjs";
const x = /* @__PURE__ */ f({
  __name: "ButtonWrapper",
  props: {
    aria: {},
    compact: { type: [Boolean, Object], default: !1 },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { type: [Boolean, Object], default: !1 },
    icon: { default: "none" },
    iconSource: {},
    loading: { type: Boolean, default: !1 },
    name: {},
    theme: {},
    type: { default: "submit" },
    value: {},
    variant: { default: "primary" }
  },
  setup(p) {
    const l = C("p-button"), e = p, t = s(), n = c(j), a = () => r(t, { ...e, theme: e.theme || n.value });
    return m(a), u(a), d(n, (o) => {
      r(t, { theme: e.theme || o });
    }), (o, v) => (h(), i(y(b(l)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: B(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  x as default
};
