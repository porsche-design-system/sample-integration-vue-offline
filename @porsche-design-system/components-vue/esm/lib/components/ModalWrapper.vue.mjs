import { defineComponent as p, ref as c, inject as f, onMounted as u, onUpdated as h, watch as y, createBlock as B, openBlock as b, resolveDynamicComponent as C, unref as _, withCtx as k, renderSlot as E } from "vue";
import { usePrefix as R, themeInjectionKey as j, syncProperties as d, addEventListenerToElementRef as t } from "../../utils.mjs";
const P = /* @__PURE__ */ p({
  __name: "ModalWrapper",
  props: {
    aria: {},
    backdrop: { default: "blur" },
    disableBackdropClick: { type: Boolean, default: !1 },
    disableCloseButton: { type: Boolean },
    dismissButton: { type: Boolean, default: !0 },
    fullscreen: { type: [Boolean, Object], default: !1 },
    heading: {},
    open: { type: Boolean, default: !1 },
    theme: {}
  },
  emits: ["close", "dismiss", "motionHiddenEnd", "motionVisibleEnd"],
  setup(i, { emit: r }) {
    const m = R("p-modal"), n = i, e = c(), o = r, a = f(j), l = () => d(e, { ...n, theme: n.theme || a.value });
    return u(() => {
      l(), t(e, "close", o), t(e, "dismiss", o), t(e, "motionHiddenEnd", o), t(e, "motionVisibleEnd", o);
    }), h(l), y(a, (s) => {
      d(e, { theme: n.theme || s });
    }), (s, v) => (b(), B(C(_(m)), {
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
  P as default
};
