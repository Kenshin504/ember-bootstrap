'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-bootstrap': {
      bootstrapVersion: 5,
      importBootstrapCSS: true
    }
  });

  return app.toTree();
};

let app = new EmberApp(defaults, {
  fingerprint: {
    prepend: 'https://github.com/Kenshin504/ember-bootstrap'
  }
});