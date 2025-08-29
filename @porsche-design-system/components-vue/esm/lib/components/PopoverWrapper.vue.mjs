import { defineComponent as m, ref as a, inject as f, onMounted as i, onUpdated as d, watch as u, openBlock as h, createBlock as l, resolveDynamicComponent as _, unref as C, withCtx as y, renderSlot as v } from "vue";
import { usePrefix as P, themeInjectionKey as k, syncProperties as p } from "../../utils.mjs";
const b = /* @__PURE__ */ m({
  __name: "PopoverWrapper",
  props: {
    aria: {},
    description: {},
    direction: { default: "bottom" },
    theme: {}
  },
  setup(s) {
    const c = P("p-popover"), e = s, o = a(), n = f(k), r = () => p(o, { ...e, theme: e.theme || n.value });
    return i(r), d(r), u(n, (t) => {
      p(o, { theme: e.theme || t });
    }), (t, w) => (h(), l(_(C(c)), {
      ref_key: "pdsComponentRef",
      ref: o
    }, {
      default: y(() => [
        v(t.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  b as default
};
