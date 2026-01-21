const pageFlip = new St.PageFlip(
  document.getElementById("flipbook"),
  {
    size: "stretch",
    width: 400,
    height: 600,

    minWidth: 300,
    maxWidth: 2000,
    minHeight: 400,
    maxHeight: 3000,

    usePortrait: true,
    autoSize: true,

    drawShadow: false,
    maxShadowOpacity: 0,

    mobileScrollSupport: false,
    showCover: true
  }
);

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setVH();
window.addEventListener("resize", setVH);


