const bookEl = document.getElementById("flipbook");

const pageFlip = new St.PageFlip(bookEl, {
  width: 600,
  height: 800, // 3:4 magazine ratio

  size: "fixed",        // IMPORTANT: prevents stretch distortion
  autoSize: true,

  showCover: false,     // COVER FLIPS LIKE NORMAL PAGE
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

  // force correct sizing + animation engine
  pageFlip.update();
  setTimeout(() => pageFlip.update(), 300);
});

/* Optional debug */
pageFlip.on("flip", (e) => {
  console.log("Flipped to page:", e.data);
});
