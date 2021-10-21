if (window.razorpayId) {
  window.donate = function (amount) {
    var promise = new Promise(function (resolve, reject) {
      new Razorpay({
        key: window.razorpayId,
        amount: amount * 100,
        name: window.razorpayName,
        description: window.razorpayDescription,
        handler: callback || window.onDonate,
      }).open();
    });

    if (window.onDonate) return promise.then(onDonate);
    return promise;
  };
}

/*
// Helper for constructing objects from form data. Unused.

$.fn.formData = function () {
	var array = this.serializeArray(), i, name, value, isArr, data = {};

	function set(obj, path) {
		var next = path[0];
		if (path.length === 1) {
			if (!isArr) return obj[next] = value;
			if (!obj[next]) return obj[next] = [ value ];
			return obj[next].push(value);
		}

		obj[next] = obj[next] || {};
		return set(obj[next], path.slice(1));
	}

	for (i = 0; i < array.length; i++) {
		name = array[i].name.split('[');
		value = array[i].value;
		isArr = !!name[1];

		set(data, name[0].split('.'))
	}
	return data;
} */

$(function () {
  // Toggle the menu when the hamburger is clicked on mobile
  $('.toggle-menu').click(function (event) {
    $('.menu').toggleClass('show');
    $('.close-menu').toggleClass('show');
    $('.toggle-menu').toggleClass('hide');
    return false;
  });

  $('.close-menu').click(function (event) {
    $('.menu').toggleClass('show');
    $('.close-menu').toggleClass('show');
    $('.toggle-menu').toggleClass('hide');
    return false;
  });

  // Fire change handlers on radio buttons that become deselected
  $('input[type=radio]').change(function (event) {
    if (!event.target.checked) return;
    $('input[type=radio][name=' + event.target.name + ']').each(function () {
      if (this !== event.target) $(this).change();
    });
  });

  // Toggle element visibility on checkbox / radio button change
  $('[data-toggle]')
    .change(function (event) {
      var toggle = event.target.getAttribute('data-toggle'),
        state = event.target.checked;

      $('.if-' + toggle)[state ? 'addClass' : 'removeClass']('show');
    })
    .change();

  /*
	// Submit forms over fetch(). Unused.
	$('form.async').submit(function (event) {
		var $form = $(this),
			action = $form.attr('action'),
			method = $form.attr('method'),
			data =$form.formData(),
			redirect = data.redirect;

		if (redirect) delete data.redirect;

		fetch(
			action,
			{
				method: method,
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data)
			}
		).then(function () {
			// TODO: Handle errors.
			location.href = redirect;
		});
	}); */
});
