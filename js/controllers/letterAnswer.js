/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global $,Ember,DS,App*/

App.LetterAnswerController = Ember.ArrayController.extend({
	init: function () {
		this.set('model', App.Note.find());
	},
	needs: ['application']
});