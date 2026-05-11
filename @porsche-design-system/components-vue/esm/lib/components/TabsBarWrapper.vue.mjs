import { defineComponent as i, ref as f, inject as l, onMounted as u, onUpdated as h, watch as C, createBlock as b, openBlock as g, resolveDynamicComponent as _, unref as y, withCtx as v, renderSlot as w } from "vue";
import { usePrefix as x, themeInjectionKey as R, syncProperties as s, addEventListenerToElementRef as m } from "../../utils.mjs";
const P = /* @__PURE__ */ i({
  __name: "TabsBarWrapper",
  props: {
    activeTabIndex: {},
    gradientColor: {},
    gradientColorScheme: {},
    size: { default: "small" },
    theme: {},
    weight: { default: "regular" }
  },
  emits: ["tabChange", "update"],
  setup(p, { emit: c }) {
    const d = x("p-tabs-bar"), t = p, e = f(), o = c, r = l(R), a = () => s(e, { ...t, theme: t.theme || r.value });
    return u(() => {
      a(), m(e, "tabChange", o), m(e, "update", o);
    }), h(a), C(r, (n) => {
      s(e, { theme: t.theme || n });
    }), (n, T) => (g(), b(_(y(d)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: v(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
