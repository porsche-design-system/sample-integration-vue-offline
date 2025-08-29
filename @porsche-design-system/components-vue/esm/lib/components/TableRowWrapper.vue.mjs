import { defineComponent as t, openBlock as r, createBlock as n, resolveDynamicComponent as a, unref as p, withCtx as l, renderSlot as m } from "vue";
import { usePrefix as s } from "../../utils.mjs";
const i = /* @__PURE__ */ t({
  __name: "TableRowWrapper",
  setup(c) {
    const e = s("p-table-row");
    return (o, f) => (r(), n(a(p(e)), null, {
      default: l(() => [
        m(o.$slots, "default")
      ]),
      _: 3
    }));
  }
});
export {
  i as default
};
