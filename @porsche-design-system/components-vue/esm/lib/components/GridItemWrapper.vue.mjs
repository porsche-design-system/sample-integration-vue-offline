import { defineComponent as s, ref as f, onMounted as a, onUpdated as c, openBlock as d, createBlock as m, resolveDynamicComponent as i, unref as u, withCtx as l, renderSlot as _ } from "vue";
import { usePrefix as C, syncProperties as y } from "../../utils.mjs";
const g = /* @__PURE__ */ s({
  __name: "GridItemWrapper",
  props: {
    offset: { default: 0 },
    size: { default: 1 }
  },
  setup(t) {
    const n = C("p-grid-item"), r = t, e = f(), o = () => y(e, r);
    return a(o), c(o), (p, k) => (d(), m(i(u(n)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: l(() => [
        _(p.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  g as default
};
