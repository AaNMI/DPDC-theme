window.razorpayId &&
  (window.donate = function (a) {
    var n = new Promise(function (n, e) {
      new Razorpay({
        key: window.razorpayId,
        amount: 100 * a,
        name: window.razorpayName,
        description: window.razorpayDescription,
        handler: callback || window.onDonate,
      }).open();
    });
    return window.onDonate ? n.then(onDonate) : n;
  }),
  $(function () {
    $('.logo').click(function (n) {
      if ('none' !== $('.toggle-menu').css('display'))
        return $('.menu').toggleClass('show'), !1;
    }),
      $('input[type=radio]').change(function (n) {
        n.target.checked &&
          $('input[type=radio][name=' + n.target.name + ']').each(function () {
            this !== n.target && $(this).change();
          });
      }),
      $('[data-toggle]')
        .change(function (n) {
          var e = n.target.getAttribute('data-toggle'),
            n = n.target.checked;
          $('.if-' + e)[n ? 'addClass' : 'removeClass']('show');
        })
        .change();
  });
//# sourceMappingURL=common.js.map
