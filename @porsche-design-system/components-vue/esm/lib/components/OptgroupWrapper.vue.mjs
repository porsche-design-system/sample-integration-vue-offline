import { defineComponent as s, ref as a, onMounted as f, onUpdated as c, openBlock as l, createBlock as d, resolveDynamicComponent as m, unref as u, withCtx as i, renderSlot as _ } from "vue";
import { usePrefix as C, syncProperties as y } from "../../utils.mjs";
const x = /* @__PURE__ */ s({
  __name: "OptgroupWrapper",
  props: {
    disabled: { type: Boolean, default: !1 },
    label: {}
  },
  setup(t) {
    const n = C("p-optgroup"), p = t, e = a(), o = () => y(e, p);
    return f(o), c(o), (r, b) => (l(), d(m(u(n)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: i(() => [
        _(r.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  x as default
};
