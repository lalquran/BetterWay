Stripe.setPublishableKey('pk_test_cVYJTFCUe1vIOprXfuoOXm3e');

//JQuery code (variable)
var $form = $('#checkout-form');

//JQuery code (function)
$form.submit(function(event){
    $('#charge-error').addClass('hidden');                 
    $form.find('button').prop('disabled', true);
    //Code Received From Stripe v2
    //Data as the first argument, response handler executes after data is validated
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#card-name').val()
      }, stripeResponseHandler);
      return false;
});
//Code received from Stripe documents
function stripeResponseHandler(status, response){
    if (response.error) { // Problem! (if form is invalid or credit card data is invalid)
        
            // Show the errors on the form
            $('#charge-error').text(response.error.message);
            $('#charge-error').removeClass('hidden');             
            $form.find('button').prop('disabled', false); // Re-enable submission
        
          } else { // Token was created!
        
            // Get the token ID:
            var token = response.id;
        
            // Insert the token into the form so it gets submitted to the server:
            $form.append($('<input type="hidden" name="stripeToken" />').val(token));
        
            // Submit the form:
            $form.get(0).submit();
        
          }
}