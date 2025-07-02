/* Theme Switcher (Singleton)
Create a singleton ThemeManager with methods to switch between "light" and "dark" themes. 
Ensure only one instance exists globally.*/

// Solution:
const ThemeManager = (function () {
  // Private instance
  let instance;

  // Define ThemeManager constructor
  function createInstance() {
    return {
      theme: "light",  // default theme

      switchTheme(newTheme) {
        if (newTheme === "light" || newTheme === "dark") {
          this.theme = newTheme;
          console.log(`Theme switched to: ${this.theme}`);
        } else {
          console.log(`Invalid theme: ${newTheme}`);
        }
      },

      getTheme() {
        console.log(`Current theme: ${this.theme}`);
        return this.theme;
      }
    };
  }

  return {
    // This is the global access point
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();



// Get the single instance
const themeManager1 = ThemeManager.getInstance();
themeManager1.switchTheme("dark"); // Theme switched to: dark

themeManager1.getTheme(); // Current theme: dark

// Get the instance again somewhere else
const themeManager2 = ThemeManager.getInstance();
themeManager2.getTheme(); // Still: dark

// Confirm they are the same
console.log(themeManager1 === themeManager2); // true

