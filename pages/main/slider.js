// Slider-banner options
var swiper = new Swiper(".intro__banner-slider", {
	slidesPerView: 1, // Количество слайдов для показа
	spaceBetween: 15, // Отступ между слайдами
	loop: true, // бесконечность
	loopedSlides: 1, // количество дублирующих слайдов
	autoplay: { // автопрокрутка
		delay: 5000, // задержка автопрокрутки
		stopOnLastSlide: false, // остановка на последнем слайде
		disableOnInteraction: false, // остановка после ручного воздействия на слайдер
	},
	speed: 1500, // скорость смены слайда
});