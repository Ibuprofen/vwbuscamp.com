
$(document).ready(function() {

  var $form = $('form');

  var formData = function() {

    return {
      'date submitted': '=NOW()',
      'sale type': 'main',
      'name': $form.find('.name').val(),
      'email': $form.find('.email').val(),
      'ticket buy or sell': $form.find('.ticket-bs').val(),
      'ticket qty': $form.find('.ticket-qty').val(),
      'vehicle pass buy or sell': $form.find('.vp-bs').val(),
      'vehicle pass qty': $form.find('.vp-qty').val()

    };

  };


  $form.validator().on('submit', function (e) {

    if (e.isDefaultPrevented()) {
      // invalid form

    } else {

      e.preventDefault();

      var $modal = $('#myModal');

      $form.find('.submit-button').prop('disabled', true);

        $modal.on('click', '.btn-primary', function(e) {
          e.preventDefault();

          // this is silly but should probably keep any crawlers away
          var url = "aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMVVlRms0c1hUeTNrMjY1a1BRVnRzQVk0SjNtd2ZOTXlKbGMyY3hsRkhGT0k=";

          window.location = window.atob(url);

        });


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

        $modal.find('.btn-primary').hide();
        $modal.find('.modal-title')[0].innerText = 'Crap';
        $modal.find('.modal-body')[0].innerText = "Something went wrong!";
        $modal.modal('show');
      });

    }
  });


});

