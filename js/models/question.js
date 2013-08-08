/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global $,Ember,DS,App*/

App.Question = Ember.Object.extend({
	chordName: function () {
		if (this.get('questionType') == 'numToChord') {
			return this.get('chord').get('name');
		} else {
			return this.get('noteName');
		}
	}.property('note', 'chord', 'chord.name'),
	noteName: function () {
		var keyChords = this.get('key').get('keyChords'),
			chord = this.get('chord'),
			chordId = chord.get('id');
		return keyChords.findProperty('id', chordId).note.get('name') + ' ' + chord.get('type').get('name');
	}.property('note', 'chord')
});