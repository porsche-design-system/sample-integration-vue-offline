import { defineComponent as r, ref as d, onMounted as p, onUpdated as s, createBlock as f, openBlock as u, resolveDynamicComponent as i, unref as c, withCtx as m, renderSlot as b } from "vue";
import { usePrefix as y, syncProperties as B } from "../../utils.mjs";
const k = /* @__PURE__ */ r({
  __name: "ButtonTileWrapper",
  props: {
    align: { default: "bottom" },
    aria: {},
    aspectRatio: { default: "4/3" },
    background: { default: "dark" },
    compact: { type: [Boolean, Object], default: !1 },
    description: {},
    disabled: { type: Boolean, default: !1 },
    gradient: { type: Boolean, default: !0 },
    icon: { default: "none" },
    iconSource: {},
    label: {},
    loading: { type: Boolean, default: !1 },
    size: { default: "medium" },
    type: { default: "submit" },
    weight: { default: "semi-bold" }
  },
  setup(o) {
    const n = y("p-button-tile"), a = o, e = d(), t = () => B(e, a);
    return p(t), s(t), (l, _) => (u(), f(i(c(n)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: m(() => [
        b(l.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  k as default
};
