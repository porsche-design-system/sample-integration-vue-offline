import { defineComponent as a, ref as i, onMounted as p, onUpdated as d, openBlock as l, createBlock as f, resolveDynamicComponent as c, unref as u, withCtx as m, renderSlot as g } from "vue";
import { usePrefix as _, syncProperties as h } from "../../utils.mjs";
const x = /* @__PURE__ */ a({
  __name: "LinkTileModelSignatureWrapper",
  props: {
    aspectRatio: { default: "3/4" },
    description: {},
    heading: {},
    headingTag: { default: "h2" },
    linkDirection: { default: () => ({ base: "column", xs: "row" }) },
    model: { default: "911" },
    weight: { default: "semi-bold" }
  },
  setup(t) {
    const n = _("p-link-tile-model-signature"), r = t, e = i(), o = () => h(e, r);
    return p(o), d(o), (s, k) => (l(), f(c(u(n)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: m(() => [
        g(s.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  x as default
};
