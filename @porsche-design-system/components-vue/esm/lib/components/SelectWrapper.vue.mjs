import { defineComponent as p, ref as m, inject as c, onMounted as u, onUpdated as i, watch as h, openBlock as y, createBlock as _, resolveDynamicComponent as B, unref as C, withCtx as b, renderSlot as v } from "vue";
import { usePrefix as w, themeInjectionKey as R, addEventListenerToElementRef as k, syncProperties as l } from "../../utils.mjs";
const j = /* @__PURE__ */ p({
  __name: "SelectWrapper",
  props: {
    compact: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    dropdownDirection: { default: "auto" },
    filter: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { default: !1 },
    label: { default: "" },
    message: { default: "" },
    name: {},
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    theme: {},
    value: {}
  },
  emits: ["update"],
  setup(s, { emit: f }) {
    const r = w("p-select"), t = s, e = m(), d = f, n = c(R), a = () => l(e, { ...t, theme: t.theme || n.value });
    return u(() => {
      a(), k(e, "update", d);
    }), i(a), h(n, (o) => {
      l(e, { theme: t.theme || o });
    }), (o, x) => (y(), _(B(C(r)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: b(() => [
        v(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  j as default
};
