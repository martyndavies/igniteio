$('#contact-submit').click(function(e){
  e.preventDefault();

  var contact_name = $('#nameinput').val();
  var contact_email = $('#emailinput').val();
  var contact_query = $('#queryinput').val();
  var subscribe = $('#subscribe').val();

  if (subscribe == "Yes") {
    var add_to_mailing_list = true;
  } else {
    var add_to_mailing_list = false;
  }

  if (contact_name.length < 1 | contact_email.length < 1 | contact_query.length <1){
    $('#contact-error').fadeIn('slow').delay(5000).fadeOut('slow');
  } else {
    $.post("https://hooks.zapier.com/hooks/catch/48292/hdkv6g/", {contact_name: contact_name, contact_email:contact_email, contact_query:contact_query, add_to_mailing_list:add_to_mailing_list}, function(data){
      if (data.status == "success"){
        window.location.replace("https://ignite.io/contact/thanks");
      } else {
        $('#contact-error-zapier-fail').fadeIn('slow').delay(5000).fadeOut('slow');
      }
    });
  }
});
