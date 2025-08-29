import { defineComponent as u, ref as f, inject as c, onMounted as m, onUpdated as h, watch as g, openBlock as C, createBlock as y, resolveDynamicComponent as _, unref as w, withCtx as B, renderSlot as P } from "vue";
import { usePrefix as k, themeInjectionKey as x, addEventListenerToElementRef as l, syncProperties as i } from "../../utils.mjs";
const b = /* @__PURE__ */ u({
  __name: "CarouselWrapper",
  props: {
    activeSlideIndex: { default: 0 },
    alignControls: { default: "auto" },
    alignHeader: { default: "start" },
    aria: {},
    description: {},
    disablePagination: {},
    focusOnCenterSlide: { type: Boolean, default: !1 },
    gradientColor: { default: "none" },
    heading: {},
    headingSize: { default: "x-large" },
    intl: {},
    pagination: { default: !0 },
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
    const p = k("p-carousel"), t = s, e = f(), a = d, o = c(x), r = () => i(e, { ...t, theme: t.theme || o.value });
    return m(() => {
      r(), l(e, "carouselChange", a), l(e, "update", a);
    }), h(r), g(o, (n) => {
      i(e, { theme: t.theme || n });
    }), (n, S) => (C(), y(_(w(p)), {
      ref_key: "pdsComponentRef",
      ref: e
    }, {
      default: B(() => [
        P(n.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  b as default
};
