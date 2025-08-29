import { defineComponent as s, ref as a, onMounted as f, onUpdated as d, openBlock as c, createBlock as m, resolveDynamicComponent as u, unref as i, withCtx as l, renderSlot as _ } from "vue";
import { usePrefix as C, syncProperties as w } from "../../utils.mjs";
const x = /* @__PURE__ */ s({
  __name: "GridWrapper",
  props: {
    direction: { default: "row" },
    gutter: { default: () => ({ base: 16, s: 24, m: 36 }) },
    wrap: { default: "wrap" }
  },
  setup(t) {
    const r = C("p-grid"), n = t, e = a(), o = () => w(e, n);
    return f(o), d(o), (p, y) => (c(), m(u(i(r)), {
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
  x as default
};
