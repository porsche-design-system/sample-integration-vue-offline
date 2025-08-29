import { defineComponent as a, ref as p, onMounted as s, onUpdated as l, openBlock as d, createBlock as u, resolveDynamicComponent as i, unref as c, withCtx as m, renderSlot as _ } from "vue";
import { usePrefix as x, syncProperties as C } from "../../utils.mjs";
const y = /* @__PURE__ */ a({
  __name: "FlexItemWrapper",
  props: {
    alignSelf: { default: "auto" },
    flex: { default: "initial" },
    grow: { default: 0 },
    offset: { default: "none" },
    shrink: { default: 1 },
    width: { default: "auto" }
  },
  setup(o) {
    const n = x("p-flex-item"), r = o, e = p(), t = () => C(e, r);
    return s(t), l(t), (f, h) => (d(), u(i(c(n)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: m(() => [
        _(f.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  y as default
};
