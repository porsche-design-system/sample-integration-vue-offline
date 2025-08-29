import { defineComponent as p, ref as f, inject as l, onMounted as m, onUpdated as i, watch as d, openBlock as u, createBlock as h, resolveDynamicComponent as _, unref as y, withCtx as C, renderSlot as k } from "vue";
import { usePrefix as w, themeInjectionKey as x, syncProperties as a } from "../../utils.mjs";
const S = /* @__PURE__ */ p({
  __name: "LinkSocialWrapper",
  props: {
    compact: { type: Boolean, default: !1 },
    hideLabel: { default: !1 },
    href: {},
    icon: {},
    iconSource: {},
    rel: {},
    target: { default: "_self" },
    theme: {}
  },
  setup(c) {
    const s = w("p-link-social"), e = c, t = f(), n = l(x), r = () => a(t, { ...e, theme: e.theme || n.value });
    return m(r), i(r), d(n, (o) => {
      a(t, { theme: e.theme || o });
    }), (o, B) => (u(), h(_(y(s)), {
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
  S as default
};
