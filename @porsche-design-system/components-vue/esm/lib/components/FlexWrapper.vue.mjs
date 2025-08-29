import { defineComponent as a, ref as f, onMounted as p, onUpdated as l, openBlock as c, createBlock as d, resolveDynamicComponent as u, unref as i, withCtx as m, renderSlot as C } from "vue";
import { usePrefix as _, syncProperties as x } from "../../utils.mjs";
const g = /* @__PURE__ */ a({
  __name: "FlexWrapper",
  props: {
    alignContent: { default: "stretch" },
    alignItems: { default: "stretch" },
    direction: { default: "row" },
    inline: { default: !1 },
    justifyContent: { default: "flex-start" },
    wrap: { default: "nowrap" }
  },
  setup(n) {
    const o = _("p-flex"), r = n, e = f(), t = () => x(e, r);
    return p(t), l(t), (s, w) => (c(), d(u(i(o)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: m(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  g as default
};
