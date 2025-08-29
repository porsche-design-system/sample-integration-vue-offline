import { defineComponent as m, ref as f, watch as i, provide as o, renderSlot as p } from "vue";
import { load as s } from "@porsche-design-system/components-js";
import { prefixInjectionKey as a, themeInjectionKey as c } from "./utils.mjs";
const _ = /* @__PURE__ */ m({
  __name: "PorscheDesignSystemProvider",
  props: {
    prefix: { default: "" },
    cdn: {},
    theme: { default: "light" }
  },
  setup(n) {
    const e = n, r = f(e.theme);
    return i(
      () => e.theme,
      (t) => {
        r.value = t;
      }
    ), s(e), o(a, e.prefix), o(c, r), (t, d) => p(t.$slots, "default");
  }
});
export {
  _ as default
};
