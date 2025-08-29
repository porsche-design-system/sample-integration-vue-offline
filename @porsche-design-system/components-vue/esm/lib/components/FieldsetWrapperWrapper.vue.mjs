import { defineComponent as f, ref as l, inject as m, onMounted as d, onUpdated as c, watch as u, openBlock as i, createBlock as h, resolveDynamicComponent as _, unref as y, withCtx as C, renderSlot as w } from "vue";
import { usePrefix as b, themeInjectionKey as k, syncProperties as a } from "../../utils.mjs";
const R = /* @__PURE__ */ f({
  __name: "FieldsetWrapperWrapper",
  props: {
    label: { default: "" },
    labelSize: { default: "medium" },
    message: { default: "" },
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    theme: {}
  },
  setup(p) {
    const s = b("p-fieldset-wrapper"), e = p, t = l(), n = m(k), r = () => a(t, { ...e, theme: e.theme || n.value });
    return d(r), c(r), u(n, (o) => {
      a(t, { theme: e.theme || o });
    }), (o, x) => (i(), h(_(y(s)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: C(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  R as default
};
