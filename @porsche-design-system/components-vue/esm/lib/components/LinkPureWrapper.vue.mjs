import { defineComponent as s, ref as p, inject as d, onMounted as u, onUpdated as c, watch as i, openBlock as m, createBlock as h, resolveDynamicComponent as _, unref as y, withCtx as g, renderSlot as w } from "vue";
import { usePrefix as C, themeInjectionKey as k, syncProperties as r } from "../../utils.mjs";
const v = /* @__PURE__ */ s({
  __name: "LinkPureWrapper",
  props: {
    active: { type: Boolean, default: !1 },
    alignLabel: { default: "end" },
    aria: {},
    download: {},
    hideLabel: { default: !1 },
    href: {},
    icon: { default: "arrow-right" },
    iconSource: {},
    rel: {},
    size: { default: "small" },
    stretch: { default: !1 },
    target: { default: "_self" },
    theme: {},
    underline: { type: Boolean, default: !1 },
    weight: { default: "regular" }
  },
  setup(l) {
    const f = C("p-link-pure"), e = l, t = p(), n = d(k), a = () => r(t, { ...e, theme: e.theme || n.value });
    return u(a), c(a), i(n, (o) => {
      r(t, { theme: e.theme || o });
    }), (o, B) => (m(), h(_(y(f)), {
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
  v as default
};
