import { defineComponent as f, ref as l, inject as m, onMounted as d, onUpdated as c, watch as u, openBlock as i, createBlock as h, resolveDynamicComponent as _, unref as y, withCtx as C, renderSlot as b } from "vue";
import { usePrefix as k, themeInjectionKey as w, syncProperties as a } from "../../utils.mjs";
const R = /* @__PURE__ */ f({
  __name: "FieldsetWrapper",
  props: {
    aria: {},
    label: { default: "" },
    labelSize: { default: "medium" },
    message: { default: "" },
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    theme: {}
  },
  setup(s) {
    const p = k("p-fieldset"), e = s, t = l(), n = m(w), r = () => a(t, { ...e, theme: e.theme || n.value });
    return d(r), c(r), u(n, (o) => {
      a(t, { theme: e.theme || o });
    }), (o, x) => (i(), h(_(y(p)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: C(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  R as default
};
