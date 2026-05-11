import { defineComponent as s, ref as f, inject as l, onMounted as m, onUpdated as i, watch as d, createBlock as u, openBlock as h, resolveDynamicComponent as _, unref as y, withCtx as C, renderSlot as k } from "vue";
import { usePrefix as B, themeInjectionKey as b, syncProperties as a } from "../../utils.mjs";
const P = /* @__PURE__ */ s({
  __name: "LinkSocialWrapper",
  props: {
    compact: { type: Boolean, default: !1 },
    hideLabel: { type: [Boolean, Object], default: !1 },
    href: {},
    icon: {},
    iconSource: {},
    rel: {},
    target: { default: "_self" },
    theme: {}
  },
  setup(c) {
    const p = B("p-link-social"), e = c, t = f(), n = l(b), r = () => a(t, { ...e, theme: e.theme || n.value });
    return m(r), i(r), d(n, (o) => {
      a(t, { theme: e.theme || o });
    }), (o, j) => (h(), u(_(y(p)), {
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
  P as default
};
