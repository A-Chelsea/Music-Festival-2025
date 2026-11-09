/** This script handles the validation of the booking form on tickets.html.
* It then checks for empty fields, valid email formats, and correct phone numbers.**/

document.addEventListener('DOMContentLoaded', function() {

    //Select the form and messages
    const bookingForm = document.getElementById('bookingForm');
    const messageDiv = document.getElementById('formMessage');

    //Add event listener to handle form submission
    bookingForm.addEventListener('submit', function(event) {
     
        //Stops submission and page from refreshing so that users' input can be validated
        event.preventDefault();

        //clear previous messages
        messageDiv.innerHTML='';
        messageDiv.style.color='white';   //This is the defaukt text colour

        //Gather data from values
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const ticketQty = document.getElementById('ticketQuantity').value;
        const ticketType = document.getElementById('ticketType').value;
        const paymentMethod = document.getElementById('PaymentMethod').value;
        const terms = document.getElementById('terms').checked;   

        //array to store errors
        let errors =[];

        //check for empty fields
        if(!fullName) {
            errors.push("Please enter your full name.");
    

        }

        //validate email address
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errors.push("Please enter a valid Email Address.");
        }


        //checks if phone number are digits neween 10 to 15
        const phonePattern = /^[0-9]{10,15}$/;
        if (!phonePattern.test(phone)) {
            errors.push("Please enter a valid phone number")
        }

        //checks ticket quantity logic 
        if (ticketQty < 1|| ticketQty > 10) {
            errors.push("You can only purchase between 1 and 10 tickets" )
        }


       //  Dropdown menu Checks
        if (ticketType === "") {
            errors.push("Please select a Ticket Type.");
        }
        if (paymentMethod === "") {
            errors.push("Please select a Payment Method.");
        }

        // website Terms and Conditions
        if (!terms) {
            errors.push("You must agree to the Terms and Conditions.");
        }

        // 4. DISPLAY RESULTS

        if (errors.length > 0) {
            //  Display all errors when form is invalid
            messageDiv.style.color = '#ff4500'; // Orange for errors
            messageDiv.style.backgroundColor = 'rgba(0,0,0,0.8)';
            messageDiv.style.padding = '15px';
            messageDiv.style.marginTop = '20px';
            messageDiv.style.borderRadius = '5px';
            
            // Convert errors into HTML text
            messageDiv.innerHTML = "<strong>Please fix the following errors:</strong><br>" + errors.join('<br>');
            
        } else {
            // When form is valid
            messageDiv.style.color = '#4A5D44';           // Green for success (matches theme)
            messageDiv.style.backgroundColor = '#ffffff';
            messageDiv.style.padding = '20px';
            messageDiv.style.marginTop = '20px';
            messageDiv.style.borderRadius = '5px';
            messageDiv.style.fontWeight = 'bold';
            messageDiv.style.textAlign = 'center';

            // Show success message
            messageDiv.innerHTML = `
                <h3>Booking Confirmed!</h3>
                <p>Tickets secured ${fullName}!</p>
                <p>! We've sent your confirmation to <strong>${email}</strong>..</p>
                <p> Get ready for Music Fest 2025!"</p>
            `;

            bookingForm.reset();
        }
    });
});