import { defineComponent as f, ref as m, inject as c, onMounted as i, onUpdated as h, watch as g, createBlock as C, openBlock as y, resolveDynamicComponent as b, unref as v, withCtx as B, renderSlot as _ } from "vue";
import { usePrefix as k, themeInjectionKey as R, syncProperties as s, addEventListenerToElementRef as n } from "../../utils.mjs";
const P = /* @__PURE__ */ f({
  __name: "SegmentedControlWrapper",
  props: {
    backgroundColor: {},
    columns: { default: "auto" },
    compact: { type: Boolean, default: !1 },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    hideLabel: { type: [Boolean, Object], default: !1 },
    label: { default: "" },
    message: { default: "" },
    name: {},
    noWrap: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    state: { default: "none" },
    theme: {},
    value: {}
  },
  emits: ["update:value", "blur", "change", "segmentedControlChange", "update"],
  setup(d, { emit: p }) {
    const u = k("p-segmented-control"), a = d, e = m(), t = p, l = c(R), r = () => s(e, { ...a, theme: a.theme || l.value });
    return i(() => {
      r(), n(e, "blur", t), n(e, "change", t, (o) => {
        t("update:value", o.target.value);
      }), n(e, "segmentedControlChange", t), n(e, "update", t);
    }), h(r), g(l, (o) => {
      s(e, { theme: a.theme || o });
    }), (o, j) => (y(), C(b(v(u)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: B(() => [
        _(o.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  P as default
};
