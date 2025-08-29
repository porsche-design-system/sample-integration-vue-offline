import { defineComponent as i, ref as f, inject as l, onMounted as h, onUpdated as u, watch as y, openBlock as C, createBlock as g, resolveDynamicComponent as _, unref as B, withCtx as k, renderSlot as R } from "vue";
import { usePrefix as v, themeInjectionKey as w, addEventListenerToElementRef as r, syncProperties as p } from "../../utils.mjs";
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
    const d = v("p-accordion"), t = s, e = f(), n = m, a = l(w), c = () => p(e, { ...t, theme: t.theme || a.value });
    return h(() => {
      c(), r(e, "accordionChange", n), r(e, "update", n);
    }), u(c), y(a, (o) => {
      p(e, { theme: t.theme || o });
    }), (o, x) => (C(), g(_(B(d)), {
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
