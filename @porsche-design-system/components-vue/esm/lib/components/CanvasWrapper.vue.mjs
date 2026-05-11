import { defineComponent as c, ref as f, inject as l, onMounted as u, onUpdated as h, watch as b, createBlock as y, openBlock as C, resolveDynamicComponent as _, unref as v, withCtx as E, renderSlot as B } from "vue";
import { usePrefix as R, themeInjectionKey as S, syncProperties as r, addEventListenerToElementRef as p } from "../../utils.mjs";
const D = /* @__PURE__ */ c({
  __name: "CanvasWrapper",
  props: {
    sidebarEndOpen: { type: Boolean, default: !1 },
    sidebarStartOpen: { type: Boolean, default: !1 },
    theme: {}
  },
  emits: ["sidebarEndDismiss", "sidebarStartUpdate"],
  setup(d, { emit: m }) {
    const i = R("p-canvas"), t = d, e = f(), o = m, s = l(S), a = () => r(e, { ...t, theme: t.theme || s.value });
    return u(() => {
      a(), p(e, "sidebarEndDismiss", o), p(e, "sidebarStartUpdate", o);
    }), h(a), b(s, (n) => {
      r(e, { theme: t.theme || n });
    }), (n, k) => (C(), y(_(v(i)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: E(() => [
        B(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  D as default
};
