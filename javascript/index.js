//Set the date for countdown till start of festival on 27th of december
const festivalDate = new Date("December 27, 2025 12:00:00").getTime();

//Countdown updates everysecond
const countdownTimer = setInterval(function() {

    //Get today's date and time
    const now = new Date().getTime();

    //Find time bewteen now and festival time
    const distance = festivalDate - now;

    //calculate time for days, hours, minutes and seconds
    //1000 miliseconds = 1s , 60secs = 1m. 60mins = 1hr, 24hrs = 1 day
    const days = Math.floor(distance/(1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 *60 * 60)) / (1000 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance %(1000 *60)) / 1000);

    //display results in HTML file
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    //display a message when countdown is done
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "<h2> It's Time!</h2>";
    }


}, 1000);    //100 represents 1000 miliseconds to 1 second