const f = (s, l, w) => [s, { lineHeight: l, fontWeight: w }];
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: {
    colors: {
      "secondary-fixed":"#ffdcc3","on-secondary-container":"#663500","primary-fixed":"#dae2fd","on-tertiary":"#ffffff","on-primary":"#ffffff","on-secondary":"#ffffff","surface-container-low":"#eff4ff","surface-container-lowest":"#ffffff",error:"#ba1a1a","inverse-surface":"#213145",tertiary:"#000000","on-surface-variant":"#45464d",outline:"#76777d","tertiary-fixed-dim":"#bcc7de","surface-container":"#e5eeff","primary-container":"#131b2e","on-tertiary-fixed":"#111c2d","inverse-on-surface":"#eaf1ff","tertiary-container":"#111c2d","on-secondary-fixed-variant":"#6e3900",primary:"#000000","on-surface":"#0b1c30","on-tertiary-container":"#79849a","surface-bright":"#f8f9ff",background:"#f8f9ff","surface-dim":"#cbdbf5","surface-tint":"#565e74","surface-container-highest":"#d3e4fe",secondary:"#904d00","outline-variant":"#c6c6cd",surface:"#f8f9ff","tertiary-fixed":"#d8e3fb","surface-variant":"#d3e4fe","on-primary-fixed":"#131b2e","surface-container-high":"#dce9ff","on-secondary-fixed":"#2f1500","secondary-fixed-dim":"#ffb77d","on-background":"#0b1c30","secondary-container":"#fe932c","primary-fixed-dim":"#bec6e0","on-primary-container":"#7c839b",
    },
    borderRadius: { DEFAULT:"0.125rem", lg:"0.25rem", xl:"0.5rem", full:"0.75rem" },
    spacing: { "space-lg":"1.5rem", gutter:"1.5rem", "margin-mobile":"1.25rem", "space-md":"1rem", "space-sm":"0.5rem", "space-xl":"2.5rem", margin:"3rem", "space-xs":"0.25rem" },
    fontFamily: {
      "body-lg":["Inter"],"body-md":["Inter"],"body-sm":["Inter"],"label-lg":["Inter"],"label-md":["Inter"],"label-sm":["Inter"],
      "headline-md":["Plus Jakarta Sans"],"headline-lg":["Plus Jakarta Sans"],"headline-sm":["Plus Jakarta Sans"],display:["Plus Jakarta Sans"],
    },
    fontSize: {
      "body-lg":f("18px","28px","400"),"body-md":f("16px","24px","400"),"body-sm":f("14px","20px","400"),
      "label-lg":f("14px","20px","600"),"label-md":f("12px","16px","600"),"label-sm":f("11px","14px","700"),
      "headline-sm":f("20px","28px","600"),"headline-md":f("28px","36px","600"),"headline-lg":f("40px","48px","700"),
      display:f("56px","64px","800"),"display-mobile":f("36px","44px","800"),
    },
  } },
  plugins: [],
};
