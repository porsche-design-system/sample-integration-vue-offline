import { defineComponent as a, ref as s, onMounted as l, onUpdated as f, createBlock as d, openBlock as c, resolveDynamicComponent as i, unref as u, withCtx as m, renderSlot as _ } from "vue";
import { usePrefix as y, syncProperties as C } from "../../utils.mjs";
const k = /* @__PURE__ */ a({
  __name: "RadioGroupOptionWrapper",
  props: {
    disabled: { type: Boolean, default: !1 },
    label: {},
    loading: { type: Boolean, default: !1 },
    value: {}
  },
  setup(n) {
    const t = y("p-radio-group-option"), p = n, e = s(), o = () => C(e, p);
    return l(o), f(o), (r, B) => (c(), d(i(u(t)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: m(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  k as default
};
