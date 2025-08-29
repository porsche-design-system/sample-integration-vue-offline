import { inject as o } from "vue";
const r = Symbol("pdsPrefix"), a = Symbol("pdsTheme"), i = (t) => {
  const e = o(r);
  if (e === void 0)
    throw new Error("It appears the <PorscheDesignSystemProvider /> is missing. Make sure to wrap your App in it.");
  return e ? e + "-" + t : t;
}, d = (t, e) => {
  const s = t.value;
  Object.keys(e).forEach((n) => s[n] = e[n]);
}, m = (t, e, s) => {
  t.value.addEventListener(e, (n) => {
    s(e, n.detail);
  });
}, u = () => {
  const t = i("p-toast");
  return {
    addMessage: (e) => {
      const s = document.body.querySelector(t);
      customElements.whenDefined(t).then(() => s.addMessage(e));
    }
  };
};
export {
  m as addEventListenerToElementRef,
  r as prefixInjectionKey,
  d as syncProperties,
  a as themeInjectionKey,
  i as usePrefix,
  u as useToastManager
};
