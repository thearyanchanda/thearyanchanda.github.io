const bookEl = document.getElementById("flipbook");

const pageFlip = new St.PageFlip(bookEl, {
  width: 600,
  height: 800,           // 3:4 magazine ratio

  size: "fixed",
  autoSize: true,

  showCover: true,       // ✅ start on cover only
  usePortrait: true,     // ✅ single-page on mobile

  flippingTime: 700,

  drawShadow: false,
  maxShadowOpacity: 0,

  mobileScrollSupport: false
});

window.addEventListener("load", () => {
  // Load pages as NORMAL pages (no hard cover)
  pageFlip.loadFromHTML(
    document.querySelectorAll("#flipbook .page")
  );

  // Force correct sizing + animation
  pageFlip.update();
  setTimeout(() => pageFlip.update(), 300);
});

/* Debug (optional) */
pageFlip.on("flip", (e) => {
  console.log("Flipped to page:", e.data);
});
