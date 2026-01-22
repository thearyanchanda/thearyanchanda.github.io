const bookEl = document.getElementById("flipbook");

function isMobile() {
  return window.innerWidth <= 768;
}

function getBookSize() {
  const margin = 32;

  const vw = window.innerWidth - margin;
  const vh = window.innerHeight - margin;

  const aspect = 600 / 800;

  let width = vw;
  let height = vw / aspect;

  if (height > vh) {
    height = vh;
    width = vh * aspect;
  }

  return {
    width: Math.floor(width),
    height: Math.floor(height)
  };
}

let pageFlip;

function initBook() {
  const { width, height } = getBookSize();

  if (pageFlip) {
    pageFlip.destroy();
  }

  pageFlip = new St.PageFlip(bookEl, {
    width: 600,
    height: 800,

    size: "fixed",
    autoSize: false,

    maxWidth: width,
    maxHeight: height,

    showCover: true,

    // ✅ THIS IS THE FIX
    usePortrait: isMobile(),

    flippingTime: 700,

    drawShadow: false,
    maxShadowOpacity: 0,

    mobileScrollSupport: false
  });

  pageFlip.loadFromHTML(
    document.querySelectorAll("#flipbook .page")
  );
}

window.addEventListener("load", initBook);
window.addEventListener("resize", initBook);
