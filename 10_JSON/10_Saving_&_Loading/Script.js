/* Saving & Loading User Preferences 
Problem:
-> A web app lets users customize settings (theme, notifications, language).
-> Create a preferences object like { "theme": "dark", "notifications": true, "language": "en" }.
-> Convert this to JSON and save it to localStorage.
-> Later, load it from localStorage, parse it back to an object.
-> Apply the settings dynamically (e.g., switch theme on page load).

Key concepts:
✅ Local storage + JSON
✅ Persisting state
✅ Using parsed data for real DOM changes
*/

// Solution:

// 1. Save preferences
const settings = {
  theme: "dark",
  notifications: true,
  language: "en"
};
localStorage.setItem("User Preferences", JSON.stringify(settings));
console.log("User preferences saved");

// 2. Load & parse
const savedJSON = localStorage.getItem("User Preferences");
const preferences = savedJSON ? JSON.parse(savedJSON) : {};
console.log("Preferences loaded:", preferences);

// 3. Apply dynamically
function dynamicSettings(preferences) {
  if (preferences.theme === "dark") {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  }
  console.log(`Language: ${preferences.language}`);
  console.log(`Notifications: ${preferences.notifications ? "ON" : "OFF"}`);
}

dynamicSettings(preferences);

