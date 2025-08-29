import { defineComponent as l, ref as d, onMounted as p, onUpdated as s, openBlock as f, createBlock as i, resolveDynamicComponent as u, unref as c, withCtx as m, renderSlot as _ } from "vue";
import { usePrefix as k, syncProperties as g } from "../../utils.mjs";
const h = /* @__PURE__ */ l({
  __name: "LinkTileWrapper",
  props: {
    align: { default: "bottom" },
    aria: {},
    aspectRatio: { default: "4/3" },
    background: { default: "dark" },
    compact: { default: !1 },
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
    const n = k("p-link-tile"), a = o, e = d(), t = () => g(e, a);
    return p(t), s(t), (r, C) => (f(), i(u(c(n)), {
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
