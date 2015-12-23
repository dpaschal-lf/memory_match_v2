
var colors = ['red','white','green'];

var game_controller;



$(document).ready(function(){
	game_controller = new game_controller_template($("#game_container"));
	game_controller.create_boxes(10);
});