import { defineComponent as o, createBlock as n, openBlock as r, resolveDynamicComponent as p, unref as m, withCtx as s, renderSlot as a } from "vue";
import { usePrefix as l } from "../../utils.mjs";
const _ = /* @__PURE__ */ o({
  __name: "TextListItemWrapper",
  setup(i) {
    const e = l("p-text-list-item");
    return (t, c) => (r(), n(p(m(e)), null, {
      default: s(() => [
        a(t.$slots, "default")
      ]),
      _: 3
    }));
  }
});
export {
  _ as default
};
