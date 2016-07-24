$(document).ready(function(){

	var socket = io();

	function dayToNight() {
		$("body").removeClass("day").addClass("night")
	}
	function nightToDay() {
		$("body").removeClass("night").addClass("day")
	}

	
	function timeCheck() {
		var time = new Date();
		var hours = time.getHours();
		return hours >18 || hours < 6;


	} 

	window.setInterval(function() {
		var isNight = timeCheck();
		if (isNight){
			dayToNight()
		}else{
			nightToDay()
		}
	}, 1000);


	$("#chat-start").click(function(){
		$.ajax({
			url: "get_archive",
			success: function(data){
				$("#chat-log ul li").remove();
				for(var i=0;i<data.length;i++)
				{
					var msg = data[i];
					if(msg.username == $("#chat-name").val())
					{
						$("#chat-log ul").append("<li class='me-line'><b>" + msg.username + "</b>:" + msg.text + "</li>");
					}else{
						$("#chat-log ul").append("<li class='them-line'><b>" + msg.username + "</b>:" + msg.text + "</li>");
					}
				}
			}
		});
	});


	$("#chat-form").submit(function(){
		var messageObject = {};
		messageObject.username = $("#chat-name").val();
		messageObject.text = $("#chat-input").val();

		socket.emit("chat message", messageObject);
		$('#chat-input').val("");
		return false;
	});

	$("#submit-chat").click(function(){
		console.log("hi world");
		$("#chat-form").submit();
	});

	socket.on('chat message', function(msg){
		if(msg.username ==$("#chat-name").val())
		{
			$("#chat-log ul").append("<li class='me-line'><b>" + msg.username + "</b>:" + msg.text + "</li>");
		}else{
			$("#chat-log ul").append("<li class='them-line'><b>" + msg.username + "</b>:" + msg.text + "</li>");
		}
	
	});

});

