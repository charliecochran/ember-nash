/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global $,Ember,DS,App*/

App.LetterAnswersView = Ember.View.extend({
	didInsertElement: function () {
		this.$().hide().fadeIn();
	},
	classNames: ['chords'],
	templateName: 'letterAnswers'
});