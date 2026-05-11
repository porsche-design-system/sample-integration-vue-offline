import { defineComponent as s, ref as p, inject as u, onMounted as d, onUpdated as c, watch as i, createBlock as m, openBlock as h, resolveDynamicComponent as y, unref as B, withCtx as b, renderSlot as _ } from "vue";
import { usePrefix as g, themeInjectionKey as C, syncProperties as l } from "../../utils.mjs";
const P = /* @__PURE__ */ s({
  __name: "ButtonPureWrapper",
  props: {
    active: { type: Boolean, default: !1 },
    alignLabel: { default: "end" },
    aria: {},
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { type: [Boolean, Object], default: !1 },
    icon: { default: "arrow-right" },
    iconSource: {},
    loading: { type: Boolean, default: !1 },
    name: {},
    size: { default: "small" },
    stretch: { type: [Boolean, Object], default: !1 },
    theme: {},
    type: { default: "submit" },
    underline: { type: Boolean, default: !1 },
    value: {},
    weight: { default: "regular" }
  },
  setup(r) {
    const f = g("p-button-pure"), e = r, t = p(), a = u(C), n = () => l(t, { ...e, theme: e.theme || a.value });
    return d(n), c(n), i(a, (o) => {
      l(t, { theme: e.theme || o });
    }), (o, w) => (h(), m(y(B(f)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: b(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
