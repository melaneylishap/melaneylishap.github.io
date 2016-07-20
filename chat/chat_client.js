$(document).ready(function(){

	var socket = io("http://localhost:3000");

	$("#chat-start").click(function(){
		$.ajax({
			url: "http://localhost:3000/get_archive",
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

	socket.on('chat message', function(msg){
		if(msg.username ==$("#chat-name").val())
		{
			$("#chat-log ul").append("<li class='me-line'><b>" + msg.username + "</b>:" + msg.text + "</li>");
		}else{
			$("#chat-log ul").append("<li class='them-line'><b>" + msg.username + "</b>:" + msg.text + "</li>");
		}
	
	});

});