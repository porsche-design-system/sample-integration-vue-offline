import { inject as r } from "vue";
const i = Symbol("pdsPrefix"), d = Symbol("pdsTheme"), c = (t) => {
  const e = r(i);
  if (e === void 0)
    throw new Error("It appears the <PorscheDesignSystemProvider /> is missing. Make sure to wrap your App in it.");
  return e ? e + "-" + t : t;
}, m = (t, e) => {
  const s = t.value;
  Object.keys(e).forEach((n) => s[n] = e[n]);
}, u = (t, e, s, n) => {
  t.value.addEventListener(e, (o) => {
    s(e, o.detail), n?.(o);
  });
}, y = () => {
  const t = c("p-toast");
  return {
    addMessage: (e) => {
      const s = document.body.querySelector(t);
      customElements.whenDefined(t).then(() => s.addMessage(e));
    }
  };
};
export {
  u as addEventListenerToElementRef,
  i as prefixInjectionKey,
  m as syncProperties,
  d as themeInjectionKey,
  c as usePrefix,
  y as useToastManager
};
