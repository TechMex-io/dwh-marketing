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

// accordion listener to only open one at a time. 
document.querySelectorAll("details").forEach((details) => {
  details.addEventListener("toggle", function () {
    if (this.open) {
      document.querySelectorAll("details").forEach((otherDetails) => {
        if (otherDetails !== this) {
          otherDetails.removeAttribute("open");
        }
      });
    }
  });
});
