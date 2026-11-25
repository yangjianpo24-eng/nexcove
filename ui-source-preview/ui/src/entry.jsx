import React from "react";
import { createRoot } from "react-dom/client";
import { BrandWordmark, independentBrand } from "./brand.jsx";
import { defaultAppearance, themeVariables } from "./appearance-state.mjs";
import darkLogo from "../../branding/nexcove/logo-dark.svg";

const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const variant = dark ? "dark" : "light";
const theme = dark ? defaultAppearance.darkTheme : defaultAppearance.lightTheme;
for (const [name, value] of Object.entries(themeVariables(theme, variant))) {
  document.documentElement.style.setProperty(name, value);
}

const icon = document.createElement("link");
icon.rel = "icon";
icon.type = "image/svg+xml";
icon.href = independentBrand.favicon;
document.head.append(icon);

document.body.style.background = "var(--paper)";
document.body.style.color = "var(--ink)";
document.body.style.fontFamily = "var(--ui-font-family)";

function BrandSourcePreview() {
  return <div style={{ padding: "2rem" }}>
    <BrandWordmark />
    <p>独立空间，自由开发。</p>
    <p lang="en">Your space. Your environment.</p>
  </div>;
}

const container = document.getElementById("root");
if (dark) {
  const style = document.createElement("style");
  style.textContent = `[data-nexcove-mark] { content: url("${darkLogo}"); }`;
  document.head.append(style);
}
createRoot(container).render(<BrandSourcePreview />);
