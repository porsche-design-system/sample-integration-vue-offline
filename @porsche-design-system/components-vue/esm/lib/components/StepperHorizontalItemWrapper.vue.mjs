import { defineComponent as s, ref as a, onMounted as f, onUpdated as c, createBlock as l, openBlock as m, resolveDynamicComponent as d, unref as i, withCtx as u, renderSlot as _ } from "vue";
import { usePrefix as C, syncProperties as y } from "../../utils.mjs";
const B = /* @__PURE__ */ s({
  __name: "StepperHorizontalItemWrapper",
  props: {
    disabled: { type: Boolean, default: !1 },
    state: {}
  },
  setup(t) {
    const n = C("p-stepper-horizontal-item"), r = t, e = a(), o = () => y(e, r);
    return f(o), c(o), (p, h) => (m(), l(d(i(n)), {
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
  B as default
};
