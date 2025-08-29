import { defineComponent as l, ref as c, inject as f, onMounted as u, onUpdated as h, watch as y, openBlock as B, createBlock as C, resolveDynamicComponent as _, unref as E, withCtx as k, renderSlot as b } from "vue";
import { usePrefix as R, themeInjectionKey as v, addEventListenerToElementRef as s, syncProperties as r } from "../../utils.mjs";
const j = /* @__PURE__ */ l({
  __name: "SheetWrapper",
  props: {
    aria: {},
    disableBackdropClick: { type: Boolean, default: !1 },
    dismissButton: { type: Boolean, default: !0 },
    open: { type: Boolean, default: !1 },
    theme: {}
  },
  emits: ["dismiss", "motionHiddenEnd", "motionVisibleEnd"],
  setup(d, { emit: a }) {
    const p = R("p-sheet"), t = d, e = c(), o = a, i = f(v), m = () => r(e, { ...t, theme: t.theme || i.value });
    return u(() => {
      m(), s(e, "dismiss", o), s(e, "motionHiddenEnd", o), s(e, "motionVisibleEnd", o);
    }), h(m), y(i, (n) => {
      r(e, { theme: t.theme || n });
    }), (n, w) => (B(), C(_(E(p)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: k(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
