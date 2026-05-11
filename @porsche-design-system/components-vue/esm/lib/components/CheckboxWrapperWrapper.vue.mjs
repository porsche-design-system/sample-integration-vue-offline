import { defineComponent as c, ref as f, inject as l, onMounted as m, onUpdated as d, watch as u, createBlock as h, openBlock as i, resolveDynamicComponent as y, unref as C, withCtx as _, renderSlot as b } from "vue";
import { usePrefix as k, themeInjectionKey as x, syncProperties as r } from "../../utils.mjs";
const j = /* @__PURE__ */ c({
  __name: "CheckboxWrapperWrapper",
  props: {
    hideLabel: { type: [Boolean, Object], default: !1 },
    label: { default: "" },
    loading: { type: Boolean, default: !1 },
    message: { default: "" },
    state: { default: "none" },
    theme: {}
  },
  setup(p) {
    const s = k("p-checkbox-wrapper"), e = p, t = f(), n = l(x), a = () => r(t, { ...e, theme: e.theme || n.value });
    return m(a), d(a), u(n, (o) => {
      r(t, { theme: e.theme || o });
    }), (o, w) => (i(), h(y(C(s)), {
      ref_key: "pdsComponentRef",
      ref: t
    }, {
      default: _(() => [
        b(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
