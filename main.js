document.addEventListener("DOMContentLoaded", function () {
  const introLayoutElm = document.querySelector("nav");
  const introLayoutElmStyle =
    introLayoutElm.currentStyle || window.getComputedStyle(introLayoutElm);
  $(".owl-carousel").owlCarousel({
    stagePadding:
      parseInt(introLayoutElmStyle.marginLeft.replace("px", "")) +
      parseInt(
        introLayoutElmStyle.getPropertyValue("padding-left").replace("px", "")
      ),
    loop: false,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
});
