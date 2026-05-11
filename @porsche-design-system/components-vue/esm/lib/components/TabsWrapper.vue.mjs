import { defineComponent as f, ref as i, inject as l, onMounted as u, onUpdated as h, watch as C, createBlock as g, openBlock as _, resolveDynamicComponent as b, unref as y, withCtx as v, renderSlot as w } from "vue";
import { usePrefix as x, themeInjectionKey as R, syncProperties as s, addEventListenerToElementRef as m } from "../../utils.mjs";
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
    const d = x("p-tabs"), t = p, e = i(), o = c, a = l(R), r = () => s(e, { ...t, theme: t.theme || a.value });
    return u(() => {
      r(), m(e, "tabChange", o), m(e, "update", o);
    }), h(r), C(a, (n) => {
      s(e, { theme: t.theme || n });
    }), (n, T) => (_(), g(b(y(d)), {
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
