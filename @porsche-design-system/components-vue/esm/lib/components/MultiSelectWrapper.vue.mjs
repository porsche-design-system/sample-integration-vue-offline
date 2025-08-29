import { defineComponent as p, ref as m, inject as u, onMounted as c, onUpdated as i, watch as h, openBlock as y, createBlock as _, resolveDynamicComponent as C, unref as B, withCtx as b, renderSlot as v } from "vue";
import { usePrefix as w, themeInjectionKey as R, addEventListenerToElementRef as k, syncProperties as l } from "../../utils.mjs";
const j = /* @__PURE__ */ p({
  __name: "MultiSelectWrapper",
  props: {
    compact: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    dropdownDirection: { default: "auto" },
    form: {},
    hideLabel: { default: !1 },
    label: { default: "" },
    message: { default: "" },
    name: {},
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    theme: {},
    value: { default: () => [] }
  },
  emits: ["update"],
  setup(s, { emit: r }) {
    const d = w("p-multi-select"), t = s, e = m(), f = r, n = u(R), a = () => l(e, { ...t, theme: t.theme || n.value });
    return c(() => {
      a(), k(e, "update", f);
    }), i(a), h(n, (o) => {
      l(e, { theme: t.theme || o });
    }), (o, x) => (y(), _(C(B(d)), {
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
