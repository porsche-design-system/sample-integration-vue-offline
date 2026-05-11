import { defineComponent as l, ref as p, onMounted as d, onUpdated as s, createBlock as f, openBlock as i, resolveDynamicComponent as c, unref as u, withCtx as m, renderSlot as _ } from "vue";
import { usePrefix as k, syncProperties as b } from "../../utils.mjs";
const h = /* @__PURE__ */ l({
  __name: "LinkTileWrapper",
  props: {
    align: { default: "bottom" },
    aria: {},
    aspectRatio: { default: "4/3" },
    background: { default: "dark" },
    compact: { type: [Boolean, Object], default: !1 },
    description: {},
    download: {},
    gradient: { type: Boolean, default: !0 },
    href: {},
    label: {},
    rel: {},
    size: { default: "medium" },
    target: { default: "_self" },
    weight: { default: "semi-bold" }
  },
  setup(o) {
    const n = k("p-link-tile"), a = o, e = p(), t = () => b(e, a);
    return d(t), s(t), (r, g) => (i(), f(c(u(n)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: m(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  h as default
};
