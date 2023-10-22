document.addEventListener("DOMContentLoaded", function () {
  $(".customer-smiles").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 12,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
    },
  });

  const introLayoutElm = document.querySelector("nav");
  const introLayoutElmStyle =
    introLayoutElm.currentStyle || window.getComputedStyle(introLayoutElm);
  $(".customer-experiences").owlCarousel({
    stagePadding:
      parseInt(introLayoutElmStyle.marginLeft.replace("px", "")) +
      parseInt(
        introLayoutElmStyle.getPropertyValue("padding-left").replace("px", "")
      ),
    loop: false,
    margin: 12,
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
