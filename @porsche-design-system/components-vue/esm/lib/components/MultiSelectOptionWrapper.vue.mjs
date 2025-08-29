import { defineComponent as s, ref as a, onMounted as l, onUpdated as c, openBlock as f, createBlock as d, resolveDynamicComponent as i, unref as m, withCtx as u, renderSlot as _ } from "vue";
import { usePrefix as C, syncProperties as y } from "../../utils.mjs";
const P = /* @__PURE__ */ s({
  __name: "MultiSelectOptionWrapper",
  props: {
    disabled: { type: Boolean, default: !1 },
    value: {}
  },
  setup(t) {
    const n = C("p-multi-select-option"), p = t, e = a(), o = () => y(e, p);
    return l(o), c(o), (r, k) => (f(), d(i(m(n)), {
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
