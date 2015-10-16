/**
 * Class xNotification
 *
 * @author Fabian Schmid <fs@studer-raimann.ch>
 * @type {{init: Function, register: Function, initClasses: Function}}
 */
var xNotification = {
	init: function () {
		var self = this;
		self.initClasses();
		self.register();
	},
	register: function () {
		$(window).on('resize', function () {
			self.initClasses();
		});
		$(document).on('click', '.xnot-content-hidden', function () {
			$(this).removeClass('xnot-content-hidden');
			$(this).addClass('xnot-content-shown');
		});
		$(document).on('click', '.xnot-content-shown', function () {
			$(this).removeClass('xnot-content-shown');
			$(this).addClass('xnot-content-hidden');
		});
	},
	initClasses: function () {
		$('.xnot-alert').each(function () {
			var strong = $(this).find('strong');
			var xnot_body = $(this).find('span.xnot-body');
			if (strong[0].scrollWidth > strong.innerWidth()) {
				$(this).addClass('xnot-content-hidden');
			}
			if (xnot_body[0].scrollWidth > xnot_body.innerWidth()) {
				$(this).addClass('xnot-content-hidden');
			}
		});
	}
};

$(document).ready(function () {
	xNotification.init();
});
