/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global $,Ember,DS,App*/

App.KeysOptionController = Ember.ArrayController.extend({
	init: function () {
		this.set('content', App.Note.find());
	}
});