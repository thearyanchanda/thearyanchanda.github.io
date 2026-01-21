const pageFlip = new St.PageFlip(
  document.getElementById("flipbook"),
  {
    width: 600,
    height: 800,

    size: "stretch",
    minWidth: 300,
    maxWidth: 1200,
    minHeight: 400,
    maxHeight: 1600,

    maxShadowOpacity: 0,   // removes page shadow
    drawShadow: false,     // fully disable shadows

    showCover: true,
    mobileScrollSupport: false,

    usePortrait: true,    // single page on mobile
    autoSize: true
  }
);

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setVH();
window.addEventListener("resize", setVH);

