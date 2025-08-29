import { defineComponent as d, ref as f, inject as c, onMounted as l, onUpdated as u, watch as h, openBlock as y, createBlock as B, resolveDynamicComponent as _, unref as C, withCtx as g, renderSlot as w } from "vue";
import { usePrefix as R, themeInjectionKey as k, addEventListenerToElementRef as v, syncProperties as a } from "../../utils.mjs";
const b = /* @__PURE__ */ d({
  __name: "BannerWrapper",
  props: {
    description: { default: "" },
    dismissButton: { type: Boolean, default: !0 },
    heading: { default: "" },
    headingTag: { default: "h5" },
    open: { type: Boolean, default: !1 },
    persistent: { type: Boolean },
    state: { default: "info" },
    theme: {},
    width: {}
  },
  emits: ["dismiss"],
  setup(r, { emit: p }) {
    const i = R("p-banner"), t = r, e = f(), m = p, o = c(k), s = () => a(e, { ...t, theme: t.theme || o.value });
    return l(() => {
      s(), v(e, "dismiss", m);
    }), u(s), h(o, (n) => {
      a(e, { theme: t.theme || n });
    }), (n, x) => (y(), B(_(C(i)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: g(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  b as default
};
