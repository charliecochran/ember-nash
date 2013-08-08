/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global $,Ember,DS,App*/

App.QuestionView = Ember.View.extend({
	didInsertElement: function () {
		this.$().hide().fadeIn();
	},
	classNames: ['question'],
	templateName: 'question'
});