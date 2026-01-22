const bookEl = document.getElementById("flipbook");

const pageFlip = new St.PageFlip(bookEl, {
  width: 600,
  height: 800,           // magazine ratio

  size: "fixed",         // 🔑 REQUIRED
  autoSize: true,        // 🔑 scale to viewport safely

  showCover: true,       // cover only at start
  usePortrait: true,     // single-page on mobile

  flippingTime: 700,

  drawShadow: false,
  maxShadowOpacity: 0,

  mobileScrollSupport: false
});

window.addEventListener("load", () => {
  pageFlip.loadFromHTML(
    document.querySelectorAll("#flipbook .page")
  );

  pageFlip.update();
});

window.addEventListener("resize", () => {
  pageFlip.update();
});
