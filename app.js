function scrollCarousel(direction) {
  const carousel = document.getElementById("learningCarousel");
  carousel.scrollBy({
    left: direction * 300,
    behavior: "smooth"
  });
}
