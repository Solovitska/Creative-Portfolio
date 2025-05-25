(() => {
  const slidesContainer = document.querySelector('#product-slider .slides');
  const slides = [...document.querySelectorAll('#product-slider .slide')];
  const prevBtn = document.querySelector('#product-slider .prev');
  const nextBtn = document.querySelector('#product-slider .next');
  const dots = [...document.querySelectorAll('#product-slider .dot')];

  let currentIndex = 0;
  let autoSlideInterval;

  const updateSlider = (index) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.toggle('active', dots.indexOf(dot) === index));

    currentIndex = index;
  };

  const nextSlide = () => updateSlider(currentIndex + 1);
  const prevSlide = () => updateSlider(currentIndex - 1);

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => updateSlider(idx));
  });

  const startAutoSlide = () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  const sliderContainer = document.querySelector('#product-slider .slider-container');
  sliderContainer.addEventListener('mouseenter', stopAutoSlide);
  sliderContainer.addEventListener('mouseleave', startAutoSlide);

  startAutoSlide();
})();
