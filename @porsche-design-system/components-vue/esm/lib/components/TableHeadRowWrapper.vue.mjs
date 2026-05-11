import { defineComponent as t, createBlock as r, openBlock as n, resolveDynamicComponent as a, unref as p, withCtx as l, renderSlot as m } from "vue";
import { usePrefix as s } from "../../utils.mjs";
const d = /* @__PURE__ */ t({
  __name: "TableHeadRowWrapper",
  setup(c) {
    const e = s("p-table-head-row");
    return (o, f) => (n(), r(a(p(e)), null, {
      default: l(() => [
        m(o.$slots, "default")
      ]),
      _: 3
    }));
  }
});
export {
  d as default
};
