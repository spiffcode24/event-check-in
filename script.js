// get all needed DOM elements

const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");

//track attendence
let count = 0;
const maxCount = 50;

// handle form submission code
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent FORM from submitting normally

  // get values for form
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text; // get the text of the selected option

  console.log(name, teamName); // for testing purposes, log the values to the console

  //increment count
  count++;
  console.log("Total check-ins: " + count);
  attendeeCount.textContent = count;

  // update progres bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  progressBar.style.width = percentage;
  console.log("Progress: " + percentage); // for testing purposes, log the percentage to the console

  //update team count
  const teamCountId = `${team}Count`;
  const teamCounter = document.getElementById(teamCountId);
  const currentTeamCount = parseInt(teamCounter.textContent);
  teamCounter.textContent = currentTeamCount + 1; // increment the team count by 1
  console.log("New team count: ", teamCounter.textContent); // for testing purposes, log the new team count to the console

  //show welcome message
  const message = `Welcome, ${name} from ${teamName}`;
  greeting.textContent = message;
  greeting.style.display = "block";
  greeting.classList.add("success-message");
  console.log(message); // for testing purposes, log the welcome message to the console

  form.reset(); // reset the form for the next attendee
});
