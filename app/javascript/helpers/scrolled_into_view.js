export function isScrolledIntoView(el, partial=false) {
  let rect = el.getBoundingClientRect();
  let elemTop = rect.top;
  let elemBottom = rect.bottom;

  // Only completely visible elements return true:
  let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  if (partial)
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}
