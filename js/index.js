const elements = [
  "site-banner",
  "site-hero",
  "site-description",
  "card-row",
  "dwh-card",
];

elements.forEach((tagName) => {
  customElements.define(tagName, class extends HTMLElement {});
});
