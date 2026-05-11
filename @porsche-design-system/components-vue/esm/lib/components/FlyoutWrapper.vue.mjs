import { defineComponent as l, ref as f, inject as c, onMounted as u, onUpdated as h, watch as y, createBlock as k, openBlock as C, resolveDynamicComponent as _, unref as b, withCtx as B, renderSlot as E } from "vue";
import { usePrefix as v, themeInjectionKey as R, syncProperties as d, addEventListenerToElementRef as s } from "../../utils.mjs";
const j = /* @__PURE__ */ l({
  __name: "FlyoutWrapper",
  props: {
    aria: {},
    backdrop: { default: "blur" },
    disableBackdropClick: { type: Boolean, default: !1 },
    footerBehavior: { default: "sticky" },
    open: { type: Boolean, default: !1 },
    position: { default: "end" },
    theme: {}
  },
  emits: ["dismiss", "motionHiddenEnd", "motionVisibleEnd"],
  setup(a, { emit: m }) {
    const p = v("p-flyout"), t = a, e = f(), o = m, i = c(R), r = () => d(e, { ...t, theme: t.theme || i.value });
    return u(() => {
      r(), s(e, "dismiss", o), s(e, "motionHiddenEnd", o), s(e, "motionVisibleEnd", o);
    }), h(r), y(i, (n) => {
      d(e, { theme: t.theme || n });
    }), (n, w) => (C(), k(_(b(p)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: B(() => [
        E(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
