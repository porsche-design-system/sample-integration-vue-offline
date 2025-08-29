import { defineComponent as s, ref as u, inject as p, onMounted as d, onUpdated as c, watch as i, openBlock as m, createBlock as h, resolveDynamicComponent as y, unref as B, withCtx as _, renderSlot as b } from "vue";
import { usePrefix as g, themeInjectionKey as C, syncProperties as l } from "../../utils.mjs";
const k = /* @__PURE__ */ s({
  __name: "ButtonPureWrapper",
  props: {
    active: { type: Boolean, default: !1 },
    alignLabel: { default: "end" },
    aria: {},
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { default: !1 },
    icon: { default: "arrow-right" },
    iconSource: {},
    loading: { type: Boolean, default: !1 },
    name: {},
    size: { default: "small" },
    stretch: { default: !1 },
    theme: {},
    type: { default: "submit" },
    underline: { type: Boolean, default: !1 },
    value: {},
    weight: { default: "regular" }
  },
  setup(r) {
    const f = g("p-button-pure"), e = r, t = u(), a = p(C), n = () => l(t, { ...e, theme: e.theme || a.value });
    return d(n), c(n), i(a, (o) => {
      l(t, { theme: e.theme || o });
    }), (o, w) => (m(), h(y(B(f)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: _(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  k as default
};
