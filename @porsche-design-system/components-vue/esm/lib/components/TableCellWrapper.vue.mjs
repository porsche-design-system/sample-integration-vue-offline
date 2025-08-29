import { defineComponent as s, ref as l, onMounted as a, onUpdated as f, openBlock as c, createBlock as m, resolveDynamicComponent as d, unref as u, withCtx as i, renderSlot as C } from "vue";
import { usePrefix as _, syncProperties as y } from "../../utils.mjs";
const B = /* @__PURE__ */ s({
  __name: "TableCellWrapper",
  props: {
    multiline: { type: Boolean, default: !1 }
  },
  setup(n) {
    const t = _("p-table-cell"), r = n, e = l(), o = () => y(e, r);
    return a(o), f(o), (p, b) => (c(), m(d(u(t)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: i(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  B as default
};
