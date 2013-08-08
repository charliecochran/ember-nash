/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global $,Ember,DS,App*/

App.CorrectView = Ember.View.extend({
	didInsertElement: function () {
		this.$().hide();
	},
	classNames: ['correct'],
	templateName: 'correct',
	lastCorrectAnswerChanged: function () {
		this.$().finish().show().delay(500).fadeOut();
	}.observes('App.State.lastCorrectAnswer')
});