/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global $,Ember,DS,App*/

App.AnswerView = Ember.View.extend({
	active: true,
	activeChanged: function () {
		var active = this.get('active');
		if (active) {
			this.$('a').removeClass('disabled');
		} else {
			this.$('a').addClass('disabled');
		}
	}.observes('active'),
	click: function (event) {
		var appController = this.get('controller').get('controllers.application'),
			$this = this.$('a.answer'),
			noteId = $this.closest('.answer-square').data('noteid'),
			typeId = $this.data('typeid'),
			chordId = $this.data('chordid');
		if (this.get('active')) {
			this.set('active', false);
			appController.checkAnswer(noteId, typeId, chordId);
		}
	},
	questionChanged: function () {
		this.set('active', true);
	}.observes('App.State.question')
});