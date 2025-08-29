import { defineComponent as a, ref as l, onMounted as s, onUpdated as f, openBlock as c, createBlock as d, resolveDynamicComponent as m, unref as u, withCtx as i, renderSlot as C } from "vue";
import { usePrefix as _, syncProperties as y } from "../../utils.mjs";
const k = /* @__PURE__ */ a({
  __name: "TableHeadCellWrapper",
  props: {
    hideLabel: { type: Boolean, default: !1 },
    multiline: { type: Boolean, default: !1 },
    sort: {}
  },
  setup(t) {
    const n = _("p-table-head-cell"), r = t, e = l(), o = () => y(e, r);
    return s(o), f(o), (p, b) => (c(), d(m(u(n)), {
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
  k as default
};
