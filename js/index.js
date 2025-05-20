// Shoelace theme
import '@shoelace-style/shoelace/dist/themes/light.css';
// custom css
import '../css/index.css';
// Only the Shoelace components used
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/carousel/carousel.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/image-comparer/image-comparer.js'

const elements = [
  "site-banner",
  "site-hero",
  "site-description",
  "card-row",
  "dwh-card",
  "description-block",
  "split-panel"
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

// shoeLace drawer listerns
const drawer = document.querySelector('.drawer-overview');
const openButton = drawer.nextElementSibling;

openButton.addEventListener('click', () => drawer.show());

