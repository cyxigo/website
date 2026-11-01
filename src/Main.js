import FlippingCatImage from "./components/FlippingCatImage.js";
import JumpingCatImage from "./components/JumpingCatImage.js";
import setupWhyCallback from "./Why.js";

customElements.define("flipping-cat-image", FlippingCatImage, {
  extends: "img",
});
customElements.define("jumping-cat-image", JumpingCatImage, { extends: "img" });
setupWhyCallback();
