import { defineComponent as d, ref as m, inject as l, onMounted as u, onUpdated as h, watch as y, createBlock as _, openBlock as g, resolveDynamicComponent as B, unref as C, withCtx as w, renderSlot as R } from "vue";
import { usePrefix as k, themeInjectionKey as v, syncProperties as s, addEventListenerToElementRef as r } from "../../utils.mjs";
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
    const p = k("p-inline-notification"), t = c, e = m(), o = f, i = l(v), a = () => s(e, { ...t, theme: t.theme || i.value });
    return u(() => {
      a(), r(e, "action", o), r(e, "dismiss", o);
    }), h(a), y(i, (n) => {
      s(e, { theme: t.theme || n });
    }), (n, x) => (g(), _(B(C(p)), {
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
