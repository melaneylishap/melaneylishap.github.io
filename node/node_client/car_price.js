$(document).ready(function(){

	$("#set-price-submit").click(function(e){
		e.preventDefault();

        $.ajax({
            url: "http://localhost:3000/set_price",
            type: "GET",
            data: {
                price: $('#car-price').val()
            }
          });
    });
});