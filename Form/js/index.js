// Script - register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.
function validateForm(e) {
    'use strict';

    // Get the event object:
	if (typeof e == 'undefined') e = window.event;

    // Get form references:
	var firstName = U.$('firstName');
	var lastName = U.$('lastName');
	var email = U.$('email');
	var phone = U.$('phone');
	var city = U.$('city');
	var state = U.$('state');
	var zip = U.$('zip');
	var terms = U.$('terms');

    // To validate the color
    var labels = document.querySelectorAll('label');

	// To validate the tooltip
	// var tooltips = document.querySelectorAll('tooltip');

    // To validate the icon
    // var icons = document.querySelectorAll('icon');
    var icon = document.getElementById('icon');
    var icon1 = document.getElementById('icon1');
    var icon2 = document.getElementById('icon2');
    var icon3 = document.getElementById('icon3');
    var icon4 = document.getElementById('icon4');
    var icon5 = document.getElementById('icon5');
    var icon6 = document.getElementById('icon6');

	// Flag variable:
	var error = false;

	// Validate the first name:
	if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
		removeErrorMessage('firstName');
        labels[0].style.color = 'green';
        icon.style.visibility = 'visible';
		// tooltips[0].style.visibility = 'visible';
        // icons[0].style.visibility = 'visible';
        
	} else {
		addErrorMessage('firstName', 'Please enter your first name.');
        labels[0].style.color = 'red';
		error = true;
	}

    // Validate the last name:
	if (/^[A-Z \.\-']{2,20}$/i.test(lastName.value)) {
		removeErrorMessage('lastName');
        labels[1].style.color = 'green';
        icon1.style.visibility = 'visible';
        // icons[1].style.visibility = 'visible';
	} else {
		addErrorMessage('lastName', 'Please enter your last name.');
        labels[1].style.color = 'red';
		error = true;
	}
	
	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
        labels[2].style.color = 'green';
        icon2.style.visibility = 'visible';
        // icons[2].style.visibility = 'visible';
	} else {
		addErrorMessage('email', 'Please enter your email address.');
        labels[2].style.color = 'red';
		error = true;
	}
	
	// Validate the phone number:
	if (/\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}/.test(phone.value)) {
		removeErrorMessage('phone');
        labels[3].style.color = 'green';
        icon3.style.visibility = 'visible';
        // icons[3].style.visibility = 'visible';
	} else {
		addErrorMessage('phone', 'Please enter your phone number.');
        labels[3].style.color = 'red';
		error = true;
	}

    // Validate the city:
	if (/^[A-Z \.\-']{2,20}$/i.test(city.value)) {
		removeErrorMessage('city');
        labels[4].style.color = 'green';
        icon4.style.visibility = 'visible';
        // icons[4].style.visibility = 'visible';
	} else {
		addErrorMessage('city', 'Please enter your city.');
        labels[4].style.color = 'red';
		error = true;
	}
	
	// Validate the state:
	if (state.selectedIndex != 0) {
		removeErrorMessage('state');
        labels[5].style.color = 'green';
        icon5.style.visibility = 'visible';
        // icons[5].style.visibility = 'visible';
	} else {
		addErrorMessage('state', 'Please select your state.');
        labels[5].style.color = 'red';
		error = true;
	}
	
	// Validate the zip code:
	if (/^\d{4}(-\d{4})?$/.test(zip.value)) {
		removeErrorMessage('zip');
        labels[6].style.color = 'green';
        icon6.style.visibility = 'visible';
        // icons[6].style.visibility = 'visible';
	} else {
		addErrorMessage('zip', 'Please enter your zip code.');
        labels[6].style.color = 'red';
		error = true;
	}

	// Validate the terms code:
	if (terms.checked) {
		removeErrorMessage('terms');
	} else{
		addErrorMessage('terms', 'Please check the box to agree to the terms and conditions before continuing.');
	}

   // If an error occurred, prevent the default behavior:
	if (error) {

		// Prevent the form's submission:
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	    return false;
	}else{

    }
    
} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';
    
	// Get a reference to the submit button:
	var submit = U.$('submit');
	
	// Toggle its disabled property:
	if (U.$('terms').checked) {
		submit.disabled = false;
        validateForm()
	} else {
		submit.disabled = true;
	}
	
} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// The validateForm() function handles the form:
    U.addEvent(U.$('theForm'), 'submit', validateForm);

	// Disable the submit button to start:
	U.$('submit').disabled = true;

	// Watch for changes on the terms checkbox:
    U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// Enbable tooltips on the phone number:
	U.enableTooltips('firstName');
	U.enableTooltips('lastName');
	U.enableTooltips('email');
	U.enableTooltips('phone');
	U.enableTooltips('city');
	U.enableTooltips('zip');
	
    
};