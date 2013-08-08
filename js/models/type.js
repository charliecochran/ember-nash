/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true */
/*global $,Ember,DS,App*/

App.Type = DS.Model.extend({
	name: DS.attr('string')
});

App.Type.FIXTURES = [
	{
		id: 1,
		name: 'Maj'
	},
	{
		id: 2,
		name: 'min'
	},
	{
		id: 3,
		name: 'dim'
	}
];