/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global $,Ember,DS,App*/

App.NumberAnswerController = Ember.ArrayController.extend({
	init: function () {
		this.set('model', App.Chord.find());
	},
	needs: ['application']
});