var $form = $('form#email-form'),
    url = 'https://script.google.com/macros/s/AKfycbwQmgpN-qb2k6JFONPPLX4XRteccIZHJtYO1_xzyhj7lcSDXiC2/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: {
        email: $('input#email').val()
    }
  }).done( function(){
    console.log(JSON.stringify({
        email: $('input#email').val()
    }));
    $('div.w-form-done').show();
  }
  );

})
