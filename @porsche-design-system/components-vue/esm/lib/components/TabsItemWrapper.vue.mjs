import { defineComponent as s, ref as a, onMounted as c, onUpdated as f, openBlock as m, createBlock as d, resolveDynamicComponent as l, unref as i, withCtx as u, renderSlot as _ } from "vue";
import { usePrefix as C, syncProperties as b } from "../../utils.mjs";
const P = /* @__PURE__ */ s({
  __name: "TabsItemWrapper",
  props: {
    label: {}
  },
  setup(t) {
    const n = C("p-tabs-item"), r = t, e = a(), o = () => b(e, r);
    return c(o), f(o), (p, y) => (m(), d(l(i(n)), {
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
  P as default
};
