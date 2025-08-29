import { defineComponent as s, ref as a, onMounted as l, onUpdated as f, openBlock as d, createBlock as c, resolveDynamicComponent as i, unref as m, withCtx as u, renderSlot as _ } from "vue";
import { usePrefix as C, syncProperties as k } from "../../utils.mjs";
const x = /* @__PURE__ */ s({
  __name: "DrilldownLinkWrapper",
  props: {
    active: { type: Boolean, default: !1 },
    aria: {},
    download: {},
    href: {},
    rel: {},
    target: { default: "_self" }
  },
  setup(n) {
    const t = C("p-drilldown-link"), r = n, e = a(), o = () => k(e, r);
    return l(o), f(o), (p, w) => (d(), c(i(m(t)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: u(() => [
        _(p.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  x as default
};
