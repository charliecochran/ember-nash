/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global $,Ember,DS,App*/

App.ApplicationController = Ember.Controller.extend({
	init: function () {
		this.questionTypeChanged();
		this.askQuestion();
	},
	askQuestion: function () {
		App.State.set('question', this.getRandomChord());
	}.observes('App.State.key', 'App.State.questionType'),
	checkAnswer: function (noteId, typeId, chordId) {
		var questionType = App.State.get('questionType');
		if ((questionType == 'numToChord' && this.checkLetterAnswer(noteId, typeId)) ||
				(questionType == 'chordToNum' && this.checkNumberAnswer(chordId))) {
			this.correct();
		} else {
			// incorrect!
			this.incorrect();
		}
	},
	checkLetterAnswer: function (noteId, typeId) {
		var question = App.State.get('question'),
			chordId = question.chord.get('id'),
			chord = question.key.get('keyChords').findProperty('id', chordId);
		return chord.note.get('id') == noteId && chord.chord.get('type').get('id') == typeId;
	},
	checkNumberAnswer: function (chordId) {
		return App.State.get('question').chord.get('id') == chordId;
	},
	correct: function () {
		App.State.incrementProperty('streak');
		App.State.set('lastCorrectAnswer', new Date());
		this.askQuestion();
	},
	getRandomChord: function () {
		var keyId = App.State.get('key') || Math.ceil(Math.random() * 12),
			chordId = Math.ceil(Math.random() * 7),
			key = App.Note.find(keyId);
		return App.Question.create({ key: key, chord: App.Chord.find(chordId), questionType: App.State.get('questionType') });
	},
	incorrect: function () {
		App.State.set('lastIncorrectAnswer', new Date());
		App.State.set('streak', 0);
	},
	streakChanged: function () {
		var streak = App.State.get('streak');
		if (streak > App.State.get('bestStreak')) {
			App.State.set('bestStreak', streak);
		}
	}.observes('App.State.streak'),
	questionChanged: function () {
		var oldQ = App.State.get('currentQuestionView');
		if (oldQ) {
			oldQ.$().fadeOut(400, function () {
				App.State.set('currentQuestionView', App.QuestionView.create({
					context: App.State.get('question')
				}));
			});
		} else {
			App.State.set('currentQuestionView', App.QuestionView.create({
				context: App.State.get('question')
			}));
		}
	}.observes('App.State.question'),
	questionTypeChanged: function () {
		var oldAnswers = App.State.get('currentAnswersView'),
			newAnswers = App.State.get('isNumToChord') ? App.LetterAnswersView.create() : App.NumberAnswersView.create();
		if (oldAnswers) {
			oldAnswers.$().fadeOut(400, function () {
				App.State.set('currentAnswersView', newAnswers);
			});
		} else {
			App.State.set('currentAnswersView', newAnswers);
		}
	}.observes('App.State.questionType')
});