/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global  jQuery,$,Handlebars,Ember,DS*/

var App = Ember.Application.create({
	ready: function () {
		// Call .find() for each fixture model so they're ready to use synchronously later on
		App.Chord.find();
		App.Note.find();
		App.Type.find();
	}
});

// Global stuff!
App.numberTypes = [
	{ value: 'arabic', label: 'Arabic' },
	{ value: 'arabic_plus_type', label: 'Arabic + Type' },
	{ value: 'roman', label: 'Roman Numeral' }
];
App.questionTypes = [
	{ value: 'numToChord', label: 'Number -> Chord' },
	{ value: 'chordToNum', label: 'Chord -> Number' }
];
App.types = [
	{ value: 1, label: 'Maj' },
	{ value: 2, label: 'min' },
	{ value: 3, label: 'dim' }
];

// State of the App!
App.StateObj = Ember.Object.extend({
	bestStreak: 0,
	currentAnswerView: null,
	currentQuestionView: null,
	key: null, // note ID, or null for random key
	lastCorrectAnswer: null,
	lastIncorrectAnswer: null,
	numberType: 'roman',
	question: null,
	questionType: 'numToChord',
	isNumToChord: function () {
		return this.get('questionType') == 'numToChord';
	}.property('questionType'),
	streak: 0
});
App.State = App.StateObj.create();