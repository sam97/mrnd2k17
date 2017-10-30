import React from 'react'

/*
 * An array of objects, each describing a timenode consisting of:
 * - A 'Date' object that tells the date
 * - An array of React elements to describe events
 * - An array of React elements to present a personal note.
 */
var timelineData = [
	{
		date: new Date(2017, 4, 26),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 4, 27),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 4, 28),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 4, 29),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 4, 30),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 4, 31),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 1),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 2),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 3),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 4),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 5),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 6),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 7),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 8),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 9),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 10),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 11),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 12),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 13),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 14),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 15),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 16),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 17),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 18),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 19),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 20),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 21),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 22),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 23),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 24),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 25),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
]

export default timelineData
