// Get reference to the HTML element where the time will be displayed
const timeElement = document.getElementById("time");
// Define the function to update the time
function updateTime() {
 // Create a new Date object to get the current time
 const now = new Date();
 // Extract hours, minutes, and seconds from the Date object
 const hours = now.getHours().toString().padStart(2, "0");
 const minutes = now.getMinutes().toString().padStart(2, "0");
 const seconds = now.getSeconds().toString().padStart(2, "0");
 // Create a formatted time string in "HH:MM:SS" format
 const timeString = ${hours}:${minutes}:${seconds};
 // Update the text content of the timeElement with the new time string
 timeElement.textContent = timeString;
}
// Call updateTime every second (1000 milliseconds) to keep the clock updated
setInterval(updateTime, 1000);
// Initial call to updateTime to display the time immediately when the page loads
updateTime();