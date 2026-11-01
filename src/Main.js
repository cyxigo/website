import FlippingCatImage from "./components/FlippingCatImage.js";
import JumpingCatImage from "./components/JumpingCatImage.js";
import MainFooter from "./components/MainFooter.js";
import setupWhyCallback from "./Why.js";

customElements.define("flipping-cat-image", FlippingCatImage, {
  extends: "img",
});
customElements.define("jumping-cat-image", JumpingCatImage, { extends: "img" });
customElements.define("main-footer", MainFooter);

setupWhyCallback();
