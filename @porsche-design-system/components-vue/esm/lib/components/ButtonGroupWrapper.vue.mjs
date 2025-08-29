import { defineComponent as s, ref as c, onMounted as f, onUpdated as u, openBlock as a, createBlock as m, resolveDynamicComponent as d, unref as i, withCtx as l, renderSlot as _ } from "vue";
import { usePrefix as C, syncProperties as x } from "../../utils.mjs";
const w = /* @__PURE__ */ s({
  __name: "ButtonGroupWrapper",
  props: {
    direction: { default: () => ({ base: "column", xs: "row" }) }
  },
  setup(n) {
    const t = C("p-button-group"), r = n, e = c(), o = () => x(e, r);
    return f(o), u(o), (p, y) => (a(), m(d(i(t)), {
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
  w as default
};
