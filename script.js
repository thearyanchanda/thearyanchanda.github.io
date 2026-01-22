const bookEl = document.getElementById("flipbook");

const pageFlip = new St.PageFlip(bookEl, {
  width: 600,
  height: 800,          // magazine ratio (3:4)

  size: "stretch",     // ✅ let PageFlip scale to fit container
  autoSize: false,     // ❌ prevent internal zoom fighting

  showCover: true,     // cover starts alone
  usePortrait: true,   // single page on mobile

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

/* Handle rotation + resize */
window.addEventListener("resize", () => {
  pageFlip.update();
});
