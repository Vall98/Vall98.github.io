var root = document.documentElement;
var style = getComputedStyle(root);

function changePageColors() {
  let prim = style.getPropertyValue("--color-primary");
  root.style.setProperty("--color-primary", style.getPropertyValue("--color-secondary"));
  root.style.setProperty("--color-secondary", prim);

  let tHover = style.getPropertyValue("--color-selector-hover-X");
  root.style.setProperty("--color-selector-hover-X", style.getPropertyValue("--color-selector-normal-X"));
  root.style.setProperty("--color-selector-normal-X", tHover);
}