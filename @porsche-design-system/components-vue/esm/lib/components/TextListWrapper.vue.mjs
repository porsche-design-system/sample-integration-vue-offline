import { defineComponent as c, ref as f, inject as a, onMounted as d, onUpdated as i, watch as l, openBlock as u, createBlock as h, resolveDynamicComponent as y, unref as _, withCtx as C, renderSlot as x } from "vue";
import { usePrefix as T, themeInjectionKey as k, syncProperties as p } from "../../utils.mjs";
const j = /* @__PURE__ */ c({
  __name: "TextListWrapper",
  props: {
    listType: {},
    orderType: {},
    theme: {},
    type: { default: "unordered" }
  },
  setup(s) {
    const m = T("p-text-list"), e = s, t = f(), n = a(k), r = () => p(t, { ...e, theme: e.theme || n.value });
    return d(r), i(r), l(n, (o) => {
      p(t, { theme: e.theme || o });
    }), (o, w) => (u(), h(y(_(m)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: C(() => [
        x(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
