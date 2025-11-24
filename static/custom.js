$(document).ready(function() {

	// Плавная прокрутка по якорю --v.1
	$('nav a').on('click', function(event) {
		$('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 500);
		event.preventDefault();
	});

});