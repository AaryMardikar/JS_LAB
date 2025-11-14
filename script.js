// External JS: prompt, console log, alert, DOM update
document.addEventListener("DOMContentLoaded", () => {
  const name = prompt("Enter your name:");
  if (name) {
    alert("Hello " + name + "!");
    console.log("Student name: " + name);

    // DOM manipulation
    const greeting = document.getElementById("studentGreeting");
    greeting.textContent = `Hello, ${name}! Welcome to the student portal.`;
  }
});
