import { defineComponent as f, ref as l, inject as c, onMounted as u, onUpdated as h, watch as y, openBlock as C, createBlock as _, resolveDynamicComponent as k, unref as B, withCtx as E, renderSlot as b } from "vue";
import { usePrefix as v, themeInjectionKey as R, addEventListenerToElementRef as s, syncProperties as d } from "../../utils.mjs";
const j = /* @__PURE__ */ f({
  __name: "FlyoutWrapper",
  props: {
    aria: {},
    disableBackdropClick: { type: Boolean, default: !1 },
    footerBehavior: { default: "sticky" },
    open: { type: Boolean, default: !1 },
    position: { default: "end" },
    theme: {}
  },
  emits: ["dismiss", "motionHiddenEnd", "motionVisibleEnd"],
  setup(m, { emit: a }) {
    const p = v("p-flyout"), t = m, e = l(), o = a, i = c(R), r = () => d(e, { ...t, theme: t.theme || i.value });
    return u(() => {
      r(), s(e, "dismiss", o), s(e, "motionHiddenEnd", o), s(e, "motionVisibleEnd", o);
    }), h(r), y(i, (n) => {
      d(e, { theme: t.theme || n });
    }), (n, w) => (C(), _(k(B(p)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: E(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
