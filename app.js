$(function(){

var $newItemInput = $("#to_do_type");
var $newItemForm = $("#to_do_item");
var $UL = $("#to_do_list")
var $userList = ("")
console.log($newItemForm);

$newItemForm.submit(function(event){
	//grabs the user form insertion
	event.preventDefault();
	$UL.append('<li>' + $newItemInput.val() + '</li>')
	//prints put what the user puts in to the list
	console.log($newItemForm.val());
})
$UL.click(function() {
	event.preventDefault();
//grabs the click then
	$(this).addClass("done");
//grabs it and refers to the css file
})

});