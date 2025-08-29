import { defineComponent as a, ref as p, onMounted as s, onUpdated as f, openBlock as u, createBlock as c, resolveDynamicComponent as m, unref as d } from "vue";
import { usePrefix as l, syncProperties as i } from "../../utils.mjs";
const v = /* @__PURE__ */ a({
  __name: "MarqueWrapper",
  props: {
    aria: {},
    href: {},
    size: { default: "responsive" },
    target: { default: "_self" },
    trademark: { type: Boolean, default: !0 },
    variant: { default: "default" }
  },
  setup(r) {
    const t = l("p-marque"), n = r, e = p(), o = () => i(e, n);
    return s(o), f(o), (_, y) => (u(), c(m(d(t)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, null, 512));
  }
});
export {
  v as default
};
