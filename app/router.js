import EmberRouter from '@ember/routing/router';
import config from 'inventory-web/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dashboard');
  this.route('products');
  this.route('stocks');
  this.route('sales');
  this.route('account');
  this.route('about');
  this.route('account');
  this.route('charts');
  this.route('notifications');
  this.route('orders');
  this.route('reset-password');
  this.route('settings');
});
