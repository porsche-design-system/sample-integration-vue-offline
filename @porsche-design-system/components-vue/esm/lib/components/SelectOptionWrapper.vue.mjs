import { defineComponent as s, ref as a, onMounted as c, onUpdated as f, openBlock as l, createBlock as d, resolveDynamicComponent as m, unref as i, withCtx as u, renderSlot as _ } from "vue";
import { usePrefix as C, syncProperties as y } from "../../utils.mjs";
const P = /* @__PURE__ */ s({
  __name: "SelectOptionWrapper",
  props: {
    disabled: { type: Boolean, default: !1 },
    value: {}
  },
  setup(t) {
    const n = C("p-select-option"), p = t, e = a(), o = () => y(e, p);
    return c(o), f(o), (r, k) => (l(), d(m(i(n)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: u(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
