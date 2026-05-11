import { defineComponent as f, ref as s, inject as l, onMounted as m, onUpdated as d, watch as i, createBlock as u, openBlock as h, resolveDynamicComponent as y, unref as _, withCtx as C, renderSlot as k } from "vue";
import { usePrefix as b, themeInjectionKey as j, syncProperties as a } from "../../utils.mjs";
const x = /* @__PURE__ */ f({
  __name: "LinkWrapper",
  props: {
    aria: {},
    compact: { type: [Boolean, Object], default: !1 },
    download: {},
    hideLabel: { type: [Boolean, Object], default: !1 },
    href: {},
    icon: { default: "none" },
    iconSource: {},
    rel: {},
    target: { default: "_self" },
    theme: {},
    variant: { default: "primary" }
  },
  setup(p) {
    const c = b("p-link"), e = p, t = s(), n = l(j), r = () => a(t, { ...e, theme: e.theme || n.value });
    return m(r), d(r), i(n, (o) => {
      a(t, { theme: e.theme || o });
    }), (o, w) => (h(), u(y(_(c)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: C(() => [
        k(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  x as default
};
