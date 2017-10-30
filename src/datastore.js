import React from 'react'

/*
 * An array of objects, each describing a timenode consisting of:
 * - A 'Date' object that tells the date
 * - An array of React elements to describe events
 * - An array of React elements to present a personal note.
 */
var timelineData = [
	{
		date: new Date(2017, 5, 26),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 27),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 28),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 29),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 30),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 5, 31),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 1),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 2),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 3),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 4),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 5),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 6),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 7),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 8),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 9),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 10),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 11),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 12),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 13),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 14),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 15),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 16),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 17),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 18),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 19),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 20),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 21),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 22),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 23),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 24),
		desc: [
			<p>All students are asked to assemble by 2:00 PM after lunch.</p>
		],
		personalNote: [
			<p>My dad, my brother and I went on two bikes.</p>,
			<p>It was a Friday, so we prayed at the closest mosque there, and they went home from there.</p>
		]
	},
	{
		date: new Date(2017, 6, 25),
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
