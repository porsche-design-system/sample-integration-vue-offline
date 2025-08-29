import { defineComponent as f, ref as i, inject as l, onMounted as u, onUpdated as h, watch as C, openBlock as g, createBlock as _, resolveDynamicComponent as b, unref as y, withCtx as v, renderSlot as w } from "vue";
import { usePrefix as x, themeInjectionKey as R, addEventListenerToElementRef as s, syncProperties as m } from "../../utils.mjs";
const j = /* @__PURE__ */ f({
  __name: "TabsWrapper",
  props: {
    activeTabIndex: { default: 0 },
    gradientColor: {},
    gradientColorScheme: {},
    size: { default: "small" },
    theme: {},
    weight: { default: "regular" }
  },
  emits: ["tabChange", "update"],
  setup(p, { emit: c }) {
    const d = x("p-tabs"), t = p, e = i(), o = c, a = l(R), r = () => m(e, { ...t, theme: t.theme || a.value });
    return u(() => {
      r(), s(e, "tabChange", o), s(e, "update", o);
    }), h(r), C(a, (n) => {
      m(e, { theme: t.theme || n });
    }), (n, T) => (g(), _(b(y(d)), {
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
  j as default
};
