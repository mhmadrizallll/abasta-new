$(".product-carousel").slick({
  slidesToShow: 2, // Dua item penuh pada desktop
  slidesToScroll: 1,
  // arrows: true, // Navigasi panah
  dots: true, // Dots navigasi
  infinite: true, // Infinite scrolling
  responsive: [
    {
      breakpoint: 768, // Untuk layar mobile
      settings: {
        slidesToShow: 1, // Satu div penuh
        slidesToScroll: 1,
      },
    },
  ],
});

$(".another-carousel").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $("#prev-arrow"), // Tombol panah kiri
  nextArrow: $("#next-arrow"), // Tombol panah kanan
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
});
