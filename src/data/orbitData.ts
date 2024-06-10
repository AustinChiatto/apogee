export const orbitDescriptions = [
  {
    id: 0,
    descriptions: 'Orbit with varying altitudes, forming an oval shape.'
  },
  {
    id: 1,
    descriptions: 'Maintains altitude approximately 35,786 km above Earth.'
  },
  {
    id: 2,
    descriptions: 'Intermediate transfer orbit to 35,786 km altitude.'
  },
  {
    id: 3,
    descriptions: 'Orbit around 35,786 km with matching rotation period.'
  },
  {
    id: 4,
    descriptions: 'Intermediate orbit transferring to geosynchronous orbit.'
  },
  {
    id: 5,
    descriptions: 'Stable point 1.5 million km from Earth.'
  },
  {
    id: 6,
    descriptions: 'Orbit around the Sun, varying distances.'
  },
  {
    id: 7,
    descriptions: 'Any orbit above 35,786 km.'
  },
  {
    id: 8,
    descriptions: 'Orbit up to 2,000 km altitude.'
  },
  {
    id: 9,
    descriptions: 'Trajectory passing close to the Moon.'
  },
  {
    id: 10,
    descriptions: 'Trajectory intended to impact the Moon.'
  },
  {
    id: 11,
    descriptions: 'Orbit around the Moon, typically at 100 km.'
  },
  {
    id: 12,
    descriptions: 'Orbit between 2,000 and 35,786 km altitude.'
  },
  {
    id: 13,
    descriptions: "LEO passing over Earth's poles."
  },
  {
    id: 14,
    descriptions: 'Path exceeding the solar gravitational boundary.'
  },
  {
    id: 15,
    descriptions: 'Trajectory not achieving full orbit.'
  },
  {
    id: 16,
    descriptions: 'Stable point 1.5 million km beyond Earth.'
  },
  {
    id: 17,
    descriptions: 'LEO maintaining consistent sunlight.'
  },
  {
    id: 18,
    descriptions: 'Transfer orbit above geostationary.'
  },
  {
    id: 19,
    descriptions: 'Orbit around Mars.'
  },
  {
    id: 20,
    descriptions: 'Orbit around Venus.'
  },
  {
    id: 21,
    descriptions: 'Orbit around an asteroid.'
  },
  {
    id: 22,
    descriptions: 'Trajectory passing close to Venus.'
  },
  {
    id: 23,
    descriptions: 'Trajectory passing close to Mars.'
  },
  {
    id: 24,
    descriptions: 'Trajectory passing close to Mercury.'
  },
  {
    id: 25,
    descriptions: 'Orbit not specified.'
  },
  {
    id: 26,
    descriptions: 'Higher altitude geostationary transfer orbit.'
  },
  {
    id: 27,
    descriptions: 'Orbit around Jupiter.'
  }
];

/* group orbits 

	===
	EARTH ORBITS
	===
	
	---
	<= 2,000 km
	Suborbital: 0-160
	LEO: 160 - 2,000
	SSO: 600 - 800
	PO: 200 - 1,000

	---
	200 km - 35,786 km
	GTO
	GSTO

	---
	2,000 km - 35,786 km
	MEO: 2,000 - 35,786

	---
	>= 35,786
	HEO
	Super-GTO
	Enhanced-GTO
	GEO

	===
	NON EARTH Destinations
	===

	Lunar
	Asteroid
	L1/L2 points
	Mars
	Venus
	Mercury
	Jupiter	
	*/

// DestinationPointId
// 1 === Lower Earth Orbit
// 2 === Middle Earth Orbit
// 3 === High Earth Orbit
// 4 === Special Point
// 5 === Lunar
// 6 === Asteroid
// 7 === Mars
// 8 === Venus
// 9 === Mercury
// 10 === Jupiter
// 11 === Escape Trajectories
