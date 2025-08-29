import { defineComponent as s, ref as c, inject as l, onMounted as m, onUpdated as d, watch as i, openBlock as u, createBlock as h, resolveDynamicComponent as _, unref as y, withCtx as C, renderSlot as k } from "vue";
import { usePrefix as w, themeInjectionKey as v, syncProperties as a } from "../../utils.mjs";
const b = /* @__PURE__ */ s({
  __name: "LinkWrapper",
  props: {
    aria: {},
    compact: { default: !1 },
    download: {},
    hideLabel: { default: !1 },
    href: {},
    icon: { default: "none" },
    iconSource: {},
    rel: {},
    target: { default: "_self" },
    theme: {},
    variant: { default: "primary" }
  },
  setup(f) {
    const p = w("p-link"), e = f, t = c(), n = l(v), r = () => a(t, { ...e, theme: e.theme || n.value });
    return m(r), d(r), i(n, (o) => {
      a(t, { theme: e.theme || o });
    }), (o, x) => (u(), h(_(y(p)), {
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
  b as default
};
