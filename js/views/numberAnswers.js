/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global $,Ember,DS,App*/

App.NumberAnswersView = Ember.View.extend({
	didInsertElement: function () {
		this.$().hide().fadeIn();
	},
	classNames: ['numbers'],
	templateName: 'numberAnswers'
});