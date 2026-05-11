import { defineComponent as u, ref as c, inject as f, onMounted as m, onUpdated as h, watch as g, createBlock as C, openBlock as y, resolveDynamicComponent as B, unref as _, withCtx as w, renderSlot as P } from "vue";
import { usePrefix as b, themeInjectionKey as k, syncProperties as l, addEventListenerToElementRef as i } from "../../utils.mjs";
const v = /* @__PURE__ */ u({
  __name: "CarouselWrapper",
  props: {
    activeSlideIndex: { default: 0 },
    alignControls: { default: "auto" },
    alignHeader: { default: "start" },
    aria: {},
    description: {},
    disablePagination: { type: [Boolean, Object] },
    focusOnCenterSlide: { type: Boolean, default: !1 },
    gradientColor: { default: "none" },
    heading: {},
    headingSize: { default: "x-large" },
    intl: {},
    pagination: { type: [Boolean, Object], default: !0 },
    rewind: { type: Boolean, default: !0 },
    skipLinkTarget: {},
    slidesPerPage: { default: 1 },
    theme: {},
    trimSpace: { type: Boolean, default: !0 },
    width: { default: "basic" },
    wrapContent: { type: Boolean }
  },
  emits: ["carouselChange", "update"],
  setup(s, { emit: d }) {
    const p = b("p-carousel"), t = s, e = c(), o = d, a = f(k), r = () => l(e, { ...t, theme: t.theme || a.value });
    return m(() => {
      r(), i(e, "carouselChange", o), i(e, "update", o);
    }), h(r), g(a, (n) => {
      l(e, { theme: t.theme || n });
    }), (n, x) => (y(), C(B(_(p)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: w(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  v as default
};
