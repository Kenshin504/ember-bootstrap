import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'inventory-web/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("fileInput");
  const button = document.querySelector(".dropbtn");

  // Check if the clicked area is outside the button and dropdown
  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.remove("show");
  }
});

loadInitializers(App, config.modulePrefix);
