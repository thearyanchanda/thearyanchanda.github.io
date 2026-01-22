const bookEl = document.getElementById("flipbook");

const pageFlip = new St.PageFlip(bookEl, {
  width: 600,
  height: 800,           // magazine aspect ratio

  size: "stretch",      // 🔑 STPageFlip controls scaling
  autoSize: true,       // 🔑 fit inside viewport safely

  showCover: true,      // cover only on start
  usePortrait: true,    // single-page on mobile

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

/* Optional */
window.addEventListener("resize", () => {
  pageFlip.update();
});
