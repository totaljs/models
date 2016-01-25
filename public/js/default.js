$.fn.send = function(url) {
	var data = {};

	$('input,textarea,select').each(function() {
		data[this.name] = $(this).val();
	});

	var options = {};

	options.type = 'POST';
	options.contentType = 'application/json; charset=utf-8';
	options.data = JSON.stringify(data);

	options.success = function(response) {
		$('#response').html(JSON.stringify(response));
	};

	$.ajax(url, options);
};

$(document).ready(function() {

	$('form').on('submit', function(e) {
		e.preventDefault();
		e.stopPropagation();
	});

	$('button[name="submit"]').on('click', function() {
		var el = $('form');
		el.send(el.attr('action'));
	});
});