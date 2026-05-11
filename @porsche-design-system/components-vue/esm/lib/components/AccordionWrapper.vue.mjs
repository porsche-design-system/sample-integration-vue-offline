import { defineComponent as i, ref as f, inject as l, onMounted as h, onUpdated as u, watch as y, createBlock as C, openBlock as g, resolveDynamicComponent as _, unref as B, withCtx as k, renderSlot as R } from "vue";
import { usePrefix as v, themeInjectionKey as w, syncProperties as r, addEventListenerToElementRef as p } from "../../utils.mjs";
const j = /* @__PURE__ */ i({
  __name: "AccordionWrapper",
  props: {
    compact: { type: Boolean },
    heading: {},
    headingTag: { default: "h2" },
    open: { type: Boolean },
    size: { default: "small" },
    sticky: { type: Boolean },
    tag: {},
    theme: {}
  },
  emits: ["accordionChange", "update"],
  setup(s, { emit: m }) {
    const d = v("p-accordion"), t = s, e = f(), n = m, a = l(w), c = () => r(e, { ...t, theme: t.theme || a.value });
    return h(() => {
      c(), p(e, "accordionChange", n), p(e, "update", n);
    }), u(c), y(a, (o) => {
      r(e, { theme: t.theme || o });
    }), (o, x) => (g(), C(_(B(d)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: k(() => [
        R(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
