/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global $,Ember,DS,App*/

App.Chord = DS.Model.extend({
	roman: DS.attr('string'),
	arabic: DS.attr('string'),
	arabic_plus_type: DS.attr('string'),
	interval: DS.attr('number'),
	type: DS.belongsTo('App.Type'),
	name: function () {
		return this.get(App.State.get('numberType'));
	}.property('App.State.numberType', 'roman', 'arabic', 'arabic_plus_type')
});

App.Chord.FIXTURES = [
	{
		id: 1,
		arabic: '1',
		arabic_plus_type: '1',
		interval: 0,
		roman: 'I',
		type: 1
	},
	{
		id: 2,
		arabic: '2',
		arabic_plus_type: '2m',
		interval: 2,
		roman: 'ii',
		type: 2
	},
	{
		id: 3,
		arabic: '3',
		arabic_plus_type: '3m',
		interval: 4,
		roman: 'iii',
		type: 2
	},
	{
		id: 4,
		arabic: '4',
		arabic_plus_type: '4',
		interval: 5,
		roman: 'IV',
		type: 1
	},
	{
		id: 5,
		arabic: '5',
		arabic_plus_type: '5',
		interval: 7,
		roman: 'V',
		type: 1
	},
	{
		id: 6,
		arabic: '6',
		arabic_plus_type: '6m',
		interval: 9,
		roman: 'vi',
		type: 2
	},
	{
		id: 7,
		arabic: '7',
		arabic_plus_type: '7dim',
		interval: 11,
		roman: 'vii',
		type: 3
	}
];