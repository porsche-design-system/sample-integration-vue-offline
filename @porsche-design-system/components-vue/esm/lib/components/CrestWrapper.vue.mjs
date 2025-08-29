import { defineComponent as p, ref as s, onMounted as c, onUpdated as f, openBlock as a, createBlock as m, resolveDynamicComponent as u, unref as d } from "vue";
import { usePrefix as i, syncProperties as l } from "../../utils.mjs";
const x = /* @__PURE__ */ p({
  __name: "CrestWrapper",
  props: {
    aria: {},
    href: {},
    target: { default: "_self" }
  },
  setup(n) {
    const r = i("p-crest"), t = n, e = s(), o = () => l(e, t);
    return c(o), f(o), (_, C) => (a(), m(u(d(r)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, null, 512));
  }
});
export {
  x as default
};
