$(document).ready(function(){

	$("#price_up").click(function(e)
    {
		e.preventDefault();
        $("api_result").text("");

        $.ajax({
            url: "http://localhost:3000/add",
            type: "GET",
            success: ajaxHandler
    });
});

    $("#price_down").click(function()
    {
        e.preventDefault();
        $("")
    })