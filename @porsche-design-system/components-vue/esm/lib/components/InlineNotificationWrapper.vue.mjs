import { defineComponent as d, ref as m, inject as l, onMounted as u, onUpdated as h, watch as y, openBlock as _, createBlock as g, resolveDynamicComponent as B, unref as C, withCtx as w, renderSlot as R } from "vue";
import { usePrefix as k, themeInjectionKey as v, addEventListenerToElementRef as s, syncProperties as r } from "../../utils.mjs";
const P = /* @__PURE__ */ d({
  __name: "InlineNotificationWrapper",
  props: {
    actionIcon: { default: "arrow-right" },
    actionLabel: {},
    actionLoading: { type: Boolean, default: !1 },
    description: { default: "" },
    dismissButton: { type: Boolean, default: !0 },
    heading: { default: "" },
    headingTag: { default: "h5" },
    persistent: { type: Boolean },
    state: { default: "info" },
    theme: {}
  },
  emits: ["action", "dismiss"],
  setup(c, { emit: f }) {
    const p = k("p-inline-notification"), t = c, e = m(), o = f, i = l(v), a = () => r(e, { ...t, theme: t.theme || i.value });
    return u(() => {
      a(), s(e, "action", o), s(e, "dismiss", o);
    }), h(a), y(i, (n) => {
      r(e, { theme: t.theme || n });
    }), (n, x) => (_(), g(B(C(p)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: w(() => [
        R(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
