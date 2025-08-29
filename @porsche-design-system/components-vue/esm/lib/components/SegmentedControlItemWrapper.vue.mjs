import { defineComponent as s, ref as a, onMounted as c, onUpdated as l, openBlock as f, createBlock as m, resolveDynamicComponent as d, unref as i, withCtx as u, renderSlot as C } from "vue";
import { usePrefix as _, syncProperties as y } from "../../utils.mjs";
const x = /* @__PURE__ */ s({
  __name: "SegmentedControlItemWrapper",
  props: {
    aria: {},
    disabled: { type: Boolean, default: !1 },
    icon: {},
    iconSource: {},
    label: {},
    value: {}
  },
  setup(n) {
    const t = _("p-segmented-control-item"), r = n, e = a(), o = () => y(e, r);
    return c(o), l(o), (p, b) => (f(), m(d(i(t)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: u(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  x as default
};
