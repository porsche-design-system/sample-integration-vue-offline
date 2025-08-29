import { defineComponent as p, ref as c, inject as f, onMounted as u, onUpdated as h, watch as y, openBlock as B, createBlock as C, resolveDynamicComponent as b, unref as _, withCtx as k, renderSlot as E } from "vue";
import { usePrefix as R, themeInjectionKey as v, addEventListenerToElementRef as t, syncProperties as i } from "../../utils.mjs";
const g = /* @__PURE__ */ p({
  __name: "ModalWrapper",
  props: {
    aria: {},
    backdrop: { default: "blur" },
    disableBackdropClick: { type: Boolean, default: !1 },
    disableCloseButton: { type: Boolean },
    dismissButton: { type: Boolean, default: !0 },
    fullscreen: { default: !1 },
    heading: {},
    open: { type: Boolean, default: !1 },
    theme: {}
  },
  emits: ["close", "dismiss", "motionHiddenEnd", "motionVisibleEnd"],
  setup(l, { emit: r }) {
    const m = R("p-modal"), n = l, e = c(), o = r, a = f(v), d = () => i(e, { ...n, theme: n.theme || a.value });
    return u(() => {
      d(), t(e, "close", o), t(e, "dismiss", o), t(e, "motionHiddenEnd", o), t(e, "motionVisibleEnd", o);
    }), h(d), y(a, (s) => {
      i(e, { theme: n.theme || s });
    }), (s, w) => (B(), C(b(_(m)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: k(() => [
        E(s.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  g as default
};
