
(function () {
  function findHeader() {
    return document.querySelector("header") ||
           document.querySelector(".site-header") ||
           document.querySelector(".topbar") ||
           document.querySelector(".navbar") ||
           document.querySelector("nav");
  }

  function updateHeader() {
    var header = findHeader();
    if (!header) return;

    header.classList.add("asb-dynamic-header");

    if (window.scrollY > 80) {
      header.classList.add("asb-shrink");
      document.body.classList.add("asb-page-scrolled");
    } else {
      header.classList.remove("asb-shrink");
      document.body.classList.remove("asb-page-scrolled");
    }
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  window.addEventListener("resize", updateHeader);
  window.addEventListener("load", updateHeader);

  var timer = setInterval(updateHeader, 500);
  setTimeout(function () {
    clearInterval(timer);
    updateHeader();
  }, 5000);
})();
