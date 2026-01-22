const bookEl = document.getElementById("flipbook");

/* --- INIT PAGEFLIP --- */
const pageFlip = new St.PageFlip(bookEl, {
  width: 550,          // single page width
  height: 733,         // single page height (3:4 ratio)

  showCover: true,
  usePortrait: true,   // THIS enables single-page on mobile
  autoSize: true,

  maxShadowOpacity: 0,
  drawShadow: false,

  mobileScrollSupport: false
});

/* --- LOAD AFTER EVERYTHING IS READY --- */
window.addEventListener("load", () => {
  pageFlip.loadFromHTML(
    document.querySelectorAll("#flipbook .page")
  );

  // force layout + animation engine
  pageFlip.update();
  setTimeout(() => pageFlip.update(), 300);
});

/* --- DEBUG (remove later) --- */
pageFlip.on("flip", (e) => {
  console.log("Page:", e.data);
});
