import { defineComponent as i, ref as d, inject as l, onMounted as h, onUpdated as u, watch as C, createBlock as _, openBlock as y, resolveDynamicComponent as R, unref as g, withCtx as k, renderSlot as v } from "vue";
import { usePrefix as w, themeInjectionKey as x, syncProperties as s, addEventListenerToElementRef as m } from "../../utils.mjs";
const B = /* @__PURE__ */ i({
  __name: "StepperHorizontalWrapper",
  props: {
    size: { default: "small" },
    theme: {}
  },
  emits: ["stepChange", "update"],
  setup(a, { emit: c }) {
    const f = w("p-stepper-horizontal"), t = a, e = d(), o = c, p = l(x), r = () => s(e, { ...t, theme: t.theme || p.value });
    return h(() => {
      r(), m(e, "stepChange", o), m(e, "update", o);
    }), u(r), C(p, (n) => {
      s(e, { theme: t.theme || n });
    }), (n, z) => (y(), _(R(g(f)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: k(() => [
        v(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  B as default
};
