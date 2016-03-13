
$(document).ready(function() {

  var $form = $('form');

  var dateTimeNow = function() {

    var d = new Date,
        dWithFormat;

    dWithFormat = [d.getMonth()+1,
                   d.getDate(),
                   d.getFullYear()].join('/')+' '+
                  [d.getHours(),
                   d.getMinutes(),
                   d.getSeconds()].join(':');

    return dWithFormat;
  };


  var formData = function() {

    return {
      'date submitted': dateTimeNow(),
      'sale type': 'main',
      'name': $form.find('.name').val(),
      'email': $form.find('.email').val(),
      'ticket buy or sell': $form.find('.ticket-bs').val(),
      'ticket qty': $form.find('.ticket-qty').val(),
      'vehicle pass buy or sell': $form.find('.vp-bs').val(),
      'vehicle pass qty': $form.find('.vp-qty').val()

    };

  };


  $('form').submit(function(e) {
    e.preventDefault();

    var $modal = $('#myModal');

    $form.find('.submit-button').prop('disabled', true);

    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbyUpXwIK_lIA58QSnB-x31ggKSPr0cSQsXhRf3wTzRFHPrs8kM/exec',
      type: 'post',
      data: formData()
    })
    .done(function(res) {
      if (res.error) {
        console.error(res.error);
        console.log(res.error.stack);
      }
      // success, modal with link to the spreadsheet
      $modal.modal('show');
    })
    .fail(function(res) {
      $form.find('.submit-button').prop('disabled', false);

      $modal.find('.modal-title')[0].innerText = 'Crap';
      $modal.find('.modal-body')[0].innerText = "Something went wrong!";
      $modal.modal('show');
    });


  });

});

