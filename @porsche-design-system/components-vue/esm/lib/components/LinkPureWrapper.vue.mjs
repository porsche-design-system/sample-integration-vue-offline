import { defineComponent as s, ref as p, inject as c, onMounted as d, onUpdated as u, watch as i, createBlock as m, openBlock as h, resolveDynamicComponent as y, unref as _, withCtx as g, renderSlot as w } from "vue";
import { usePrefix as B, themeInjectionKey as C, syncProperties as r } from "../../utils.mjs";
const P = /* @__PURE__ */ s({
  __name: "LinkPureWrapper",
  props: {
    active: { type: Boolean, default: !1 },
    alignLabel: { default: "end" },
    aria: {},
    download: {},
    hideLabel: { type: [Boolean, Object], default: !1 },
    href: {},
    icon: { default: "arrow-right" },
    iconSource: {},
    rel: {},
    size: { default: "small" },
    stretch: { type: [Boolean, Object], default: !1 },
    target: { default: "_self" },
    theme: {},
    underline: { type: Boolean, default: !1 },
    weight: { default: "regular" }
  },
  setup(l) {
    const f = B("p-link-pure"), e = l, t = p(), n = c(C), a = () => r(t, { ...e, theme: e.theme || n.value });
    return d(a), u(a), i(n, (o) => {
      r(t, { theme: e.theme || o });
    }), (o, b) => (h(), m(y(_(f)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
