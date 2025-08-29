import { defineComponent as t, openBlock as n, createBlock as r, resolveDynamicComponent as a, unref as p, withCtx as l, renderSlot as m } from "vue";
import { usePrefix as s } from "../../utils.mjs";
const d = /* @__PURE__ */ t({
  __name: "TableBodyWrapper",
  setup(c) {
    const e = s("p-table-body");
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
