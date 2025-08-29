import { defineComponent as p, ref as s, onMounted as a, onUpdated as c, openBlock as f, createBlock as m, resolveDynamicComponent as l, unref as d } from "vue";
import { usePrefix as u, syncProperties as i } from "../../utils.mjs";
const k = /* @__PURE__ */ p({
  __name: "FlagWrapper",
  props: {
    aria: {},
    name: { default: "de" },
    size: { default: "small" }
  },
  setup(n) {
    const r = u("p-flag"), t = n, e = s(), o = () => i(e, t);
    return a(o), c(o), (_, C) => (f(), m(l(d(r)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, null, 512));
  }
});
export {
  k as default
};
