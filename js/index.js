const elements = [
  "site-banner",
  "site-hero",
  "site-description",
  "card-row",
  "dwh-card",
  "description-block",
  "split-panel",
];

elements.forEach((tagName) => {
  customElements.define(tagName, class extends HTMLElement {});
});

const accordionEl = document.querySelector(".accordion");
accordionEl.addEventListener("click", function (e) {
  [...accordionEl.children].forEach((child) => {
    child.removeAttribute("open");
  });
});
