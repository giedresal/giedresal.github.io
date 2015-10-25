
function askQuestions() {


	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName

	$('h2').text('Hello ' + fullName)

	var userAge = prompt('How old are you?');

	userAge = parseInt(userAge);

	if (userAge >= 18) {
		console.log('User is an adult.');
	} else if (userAge >= 13) {
		console.log('User is a teenager.');
	} else {
		console.log('User is a child');
	}


	if (firstName.toLowerCase() === "General" && lastName.toLowerCase() !== "Assembly") {
		console.log('Greetings, General!');
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'green' ||
		faveColour == 'yellow') {

		$('h2').css('color', faveColour);

	}

}


/*this is a block 
comment*/

//when the page loads
$(function() {

	$('img').on('click', askQuestions);

	//hide the sections
	$('h3').next().hide();

	//when the user click h3 heading
	$('h3').on('click', function() {


		//show or hide the next element
		$(this).next().slideToggle(500);

	});

});

