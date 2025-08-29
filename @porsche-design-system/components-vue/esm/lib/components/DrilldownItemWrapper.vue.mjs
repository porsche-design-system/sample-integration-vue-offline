import { defineComponent as p, ref as s, onMounted as l, onUpdated as f, openBlock as d, createBlock as c, resolveDynamicComponent as i, unref as m, withCtx as u, renderSlot as y } from "vue";
import { usePrefix as _, syncProperties as C } from "../../utils.mjs";
const x = /* @__PURE__ */ p({
  __name: "DrilldownItemWrapper",
  props: {
    cascade: { type: Boolean, default: !1 },
    identifier: {},
    label: {},
    primary: { type: Boolean, default: !1 },
    secondary: { type: Boolean, default: !1 }
  },
  setup(n) {
    const t = _("p-drilldown-item"), r = n, e = s(), o = () => C(e, r);
    return l(o), f(o), (a, B) => (d(), c(i(m(t)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: u(() => [
        y(a.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  x as default
};
