$(document).ready(function(){

	$("#summary").hide

	$("input").focus(function(){
		$(this).css({"background-color":"#FF6699"});
	});

	$("input").blur(function(){
		$(this).css({"background-color":"inherit"});
	});

	$("#user-happy").click(function(){
		if($(this).is(":checked"))
		{
			$("#smiley").remove();
			$(this).parent().append("<span id='smiley'>B-)</span>");
		}else{
			$("#smiley").text("3-(");
		}
	});

	$("#user-country").change(function(){
		alert($(this).val());
	});

	$("#form-submit").click(function(e){

		e.preventDefault();

		$("#name-result").text($("#user-name").val());
		$("#email-result").text($("#user-email").val());

		if($("user-happy").is(":checked"))
		{
			("#happy-reseult").text("are");
		}else{
			$("#happy-result").text("aren't");
		}
		var countryVal = $("#user-country").val();
		var countryName = $("#user-country option[value='" + countryVal + "']");	
		$("#country-result").text($("#user-country").val());
	});

});