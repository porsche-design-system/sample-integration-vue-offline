import { defineComponent as l, ref as f, inject as u, onMounted as i, onUpdated as h, watch as C, openBlock as g, createBlock as _, resolveDynamicComponent as y, unref as k, withCtx as v, renderSlot as R } from "vue";
import { usePrefix as b, themeInjectionKey as w, addEventListenerToElementRef as s, syncProperties as a } from "../../utils.mjs";
const j = /* @__PURE__ */ l({
  __name: "SegmentedControlWrapper",
  props: {
    backgroundColor: {},
    columns: { default: "auto" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    name: {},
    theme: {},
    value: {}
  },
  emits: ["segmentedControlChange", "update"],
  setup(p, { emit: d }) {
    const c = b("p-segmented-control"), t = p, e = f(), n = d, r = u(w), m = () => a(e, { ...t, theme: t.theme || r.value });
    return i(() => {
      m(), s(e, "segmentedControlChange", n), s(e, "update", n);
    }), h(m), C(r, (o) => {
      a(e, { theme: t.theme || o });
    }), (o, x) => (g(), _(y(k(c)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: v(() => [
        R(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
