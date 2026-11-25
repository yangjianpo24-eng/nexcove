import React from "react";
import nexCoveName from "../../branding/nexcove/name.txt?raw";
import nexCoveLogo from "../../branding/nexcove/logo-light.svg";
import nexCoveFavicon from "../../branding/nexcove/favicon.svg";
import cageLogo from "./logo.png";

export const independentBrand = Object.freeze({
  name: nexCoveName.trim(),
  logo: nexCoveLogo,
  favicon: nexCoveFavicon,
});
const upstreamBrand = Object.freeze({ name: "Cage", logo: cageLogo });

export function appBrand(independent = window.cageIndependentDev === true) {
  return independent ? independentBrand : upstreamBrand;
}

export function applyDocumentBrand() {
  if (window.cageIndependentDev !== true) return;
  document.title = independentBrand.name;
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.href = independentBrand.favicon;
    favicon.type = "image/svg+xml";
  }
}

export function BrandWordmark() {
  return <strong className="nexcove-wordmark">
    <img src={independentBrand.logo} data-nexcove-mark alt="" width="24" height="24" />
    {independentBrand.name}
  </strong>;
}
