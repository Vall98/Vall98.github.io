var root = document.documentElement;
var style = getComputedStyle(root);

function changePageColors() {
  let prim = style.getPropertyValue("--color-primary");
  root.style.setProperty("--color-primary", style.getPropertyValue("--color-secondary"));
  root.style.setProperty("--color-secondary", prim);
}