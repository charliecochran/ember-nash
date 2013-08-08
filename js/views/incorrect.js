/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global $,Ember,DS,App*/

App.IncorrectView = Ember.View.extend({
	didInsertElement: function () {
		this.$().hide();
	},
	classNames: ['incorrect'],
	templateName: 'incorrect',
	lastIncorrectAnswerChanged: function () {
		this.$().finish().show().delay(300).fadeOut(500);
	}.observes('App.State.lastIncorrectAnswer')
});