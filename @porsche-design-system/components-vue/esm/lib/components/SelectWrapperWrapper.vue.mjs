import { defineComponent as s, ref as f, inject as c, onMounted as d, onUpdated as m, watch as u, createBlock as i, openBlock as h, resolveDynamicComponent as y, unref as _, withCtx as C, renderSlot as w } from "vue";
import { usePrefix as B, themeInjectionKey as b, syncProperties as r } from "../../utils.mjs";
const x = /* @__PURE__ */ s({
  __name: "SelectWrapperWrapper",
  props: {
    description: { default: "" },
    dropdownDirection: { default: "auto" },
    filter: { type: Boolean, default: !1 },
    hideLabel: { type: [Boolean, Object], default: !1 },
    label: { default: "" },
    message: { default: "" },
    native: { type: Boolean, default: !1 },
    state: { default: "none" },
    theme: {}
  },
  setup(p) {
    const l = B("p-select-wrapper"), e = p, t = f(), n = c(b), a = () => r(t, { ...e, theme: e.theme || n.value });
    return d(a), m(a), u(n, (o) => {
      r(t, { theme: e.theme || o });
    }), (o, j) => (h(), i(y(_(l)), {
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
  x as default
};
