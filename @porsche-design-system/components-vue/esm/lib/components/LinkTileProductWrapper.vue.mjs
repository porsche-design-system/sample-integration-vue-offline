import { defineComponent as c, ref as f, inject as m, onMounted as d, onUpdated as u, watch as h, openBlock as k, createBlock as _, resolveDynamicComponent as y, unref as C, withCtx as B, renderSlot as R } from "vue";
import { usePrefix as g, themeInjectionKey as P, addEventListenerToElementRef as v, syncProperties as i } from "../../utils.mjs";
const j = /* @__PURE__ */ c({
  __name: "LinkTileProductWrapper",
  props: {
    aspectRatio: { default: "3:4" },
    description: {},
    heading: {},
    href: {},
    likeButton: { type: Boolean, default: !0 },
    liked: { type: Boolean, default: !1 },
    price: {},
    priceOriginal: {},
    rel: {},
    target: { default: "_self" },
    theme: {}
  },
  emits: ["like"],
  setup(p, { emit: s }) {
    const a = g("p-link-tile-product"), t = p, e = f(), l = s, n = m(P), r = () => i(e, { ...t, theme: t.theme || n.value });
    return d(() => {
      r(), v(e, "like", l);
    }), u(r), h(n, (o) => {
      i(e, { theme: t.theme || o });
    }), (o, w) => (k(), _(y(C(a)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: B(() => [
        R(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
