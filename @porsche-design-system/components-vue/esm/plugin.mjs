import { inject as n, ref as c } from "vue";
import { componentsReady as i, load as m } from "@porsche-design-system/components-js";
import { prefixInjectionKey as a } from "./utils.mjs";
const t = Symbol();
function u() {
  const e = n(t);
  if (!e)
    throw new Error(
      "[Porsche Design System Vue] No plugin was provided. Make sure to create one via `createPorscheDesignSystem()`."
    );
  return e;
}
function g(e = { prefix: "" }) {
  const r = c(!1), s = {
    options: e,
    isPorscheDesignSystemLoaded: r,
    componentsReady: i,
    async install(o) {
      r.value || (m({ prefix: e.prefix }), await i(), r.value = !0), o.provide(a, e.prefix), o.provide(t, s);
    }
  };
  return s;
}
export {
  g as createPorscheDesignSystem,
  t as porscheDesignSystemSymbol,
  u as usePorscheDesignSystemPlugin
};
