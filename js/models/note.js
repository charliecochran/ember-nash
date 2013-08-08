/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global $,Ember,DS,App*/

App.Note = DS.Model.extend({
	name: DS.attr('string'),
	keyChords: function () {
		var rootId = this.get('id'),
			allChords = App.Chord.find(),
			returnValue = [];
		
		allChords.forEach(function (item, index) {
			var interval = item.get('interval'),
				noteId = (+rootId) + (+interval);
			if (noteId > 12) {
				noteId -= 12;
			}
			returnValue.pushObject(Ember.Object.create({
				id: item.get('id'),
				note: App.Note.find(noteId),
				chord: item
			}));
		});
		
		return returnValue;
	}.property()
});

App.Note.FIXTURES = [
	{
		id: 1,
		name: 'C'
	},
	{
		id: 2,
		name: 'C#/Db'
	},
	{
		id: 3,
		name: 'D'
	},
	{
		id: 4,
		name: 'D#/Eb'
	},
	{
		id: 5,
		name: 'E'
	},
	{
		id: 6,
		name: 'F'
	},
	{
		id: 7,
		name: 'F#/Gb'
	},
	{
		id: 8,
		name: 'G'
	},
	{
		id: 9,
		name: 'G#/Ab'
	},
	{
		id: 10,
		name: 'A'
	},
	{
		id: 11,
		name: 'A#/Bb'
	},
	{
		id: 12,
		name: 'B'
	}
];