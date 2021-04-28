$(function(){

	$('#translateButton').on('click', function(){

		var inputText = $('#inputText').val();
		var outputText = inputText.replace(/\n/g, ' ');

		$('#outputText').val(outputText);
	});

});