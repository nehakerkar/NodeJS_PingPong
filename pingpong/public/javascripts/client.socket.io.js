
var server_name = "http://127.0.0.1:3000/";
var server = io.connect(server_name);
console.log('Client: Connecting to server '+server_name);
var msgElement = document.getElementById('server-response');
var count=0;

//setInterval(function() {
//server.emit('ping', {text: 'PING'});
//},1000+Math.round(4000*Math.random()));


$('#ping').click(function(){
server.emit('ping', {text: 'PING'});// Emit PING when button is clicked.
});

server.on('ping',function(data){
count = count+1;
server.emit('pong',{text: 'PONG: '+count});//Emit PONG when you recieve PING.
});

server.on('pong',function(data){
msgElement.innerHTML = 'Received from server: '+data.text;//Print PONG response recieved from client.
});

