$(document).ready(function(){

	var socket = io();

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

	socket.on('chat message', function(msg){
		if(msg.username ==$("#chat-name").val())
		{
			$("#chat-log ul").append("<li class='me-line'><b>" + msg.username + "</b>:" + msg.text + "</li>");
		}else{
			$("#chat-log ul").append("<li class='them-line'><b>" + msg.username + "</b>:" + msg.text + "</li>");
		}
	
	});

});

$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6)
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "night";
	else if (n > 16 && n < 19)
	  // If time is between 4PM – 7PM sunset theme to ‘body’
	  document.body.className = "sunset";
	else
	  // Else use ‘day’ theme
	  document.body.className = "day";
});