const bookEl = document.getElementById("flipbook");

// Mobile detection
function isMobile() {
  return window.innerWidth <= 768;
}

// Compute max size to fit viewport without clipping
function getBookSize() {
  const margin = 32; // room to avoid clipping edges
  const vw = window.innerWidth - margin;
  const vh = window.innerHeight - margin;
  const aspect = 600 / 800; // page width / height

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

  // Destroy previous instance
  if (pageFlip) {
    pageFlip.destroy();
  }

  pageFlip = new St.PageFlip(bookEl, {
    width: 600,
    height: 800,
    size: "fixed",         // don't auto-stretch
    autoSize: false,       // we control scaling

    maxWidth: width,       // fit to viewport
    maxHeight: height,     // fit to viewport

    showCover: true,       // cover alone at start
    usePortrait: isMobile(),

    flippingTime: 700,
    drawShadow: false,
    maxShadowOpacity: 0,
    mobileScrollSupport: false
  });

  pageFlip.loadFromHTML(document.querySelectorAll("#flipbook .page"));

  // Update layout for retina / high-DPI
  pageFlip.update();
}

// Initialize and reinitialize on resize
window.addEventListener("load", initBook);
window.addEventListener("resize", initBook);
