const bookEl = document.getElementById("flipbook");

function getBookSize() {
  const margin = 32; // breathing room so edges never clip

  const vw = window.innerWidth - margin;
  const vh = window.innerHeight - margin;

  const aspect = 600 / 800; // width / height

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
    autoSize: false, // 🔑 we control sizing now

    maxWidth: width,
    maxHeight: height,

    showCover: true,
    usePortrait: true,

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
