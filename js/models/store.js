/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global $,Ember,DS,App*/

App.Store = DS.Store.extend({
	revision: 13,
	adapter: 'DS.FixtureAdapter'
});