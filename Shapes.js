// Global flag to indicate color swap mode
var COLOR_SWAP_ENABLED = false;

// Map logical colors to asset paths considering swap state
function mapColor(color) {
    if (!COLOR_SWAP_ENABLED) { return color; }
    return color === 'media/redblock.png' ? 'media/blueblock.png' :
           color === 'media/blueblock.png' ? 'media/redblock.png' : color;
}

// Function to randomly assign red or blue color
function getRandomColor() {
    var base = Math.random() < 0.5 ? 'media/redblock.png' : 'media/blueblock.png';
    return mapColor(base);
}

// Function to get opposite color for shadows
function getOppositeColor(color) {
    // Color provided is already the currently displayed asset.
    // Return the opposite color asset directly.
    return (color === 'media/redblock.png') ? 'media/blueblock.png' : 'media/redblock.png';
}

// Toggle function to flip swap flag
function toggleGlobalColorSwap() {
    COLOR_SWAP_ENABLED = !COLOR_SWAP_ENABLED;
}

var SHAPES = {
    i: {
	spin: 'corner',
	startX: 5,
	startY: 0,
	pos: [
	    { x: -2, y: -1 },
	    { x: -1, y: -1},
	    { x: 0, y: -1 },
	    { x: 1, y: -1 }
	],
	getImage: function() { return getRandomColor(); },
	kickType: 'i_block'
    },
    o: {
	spin: 'corner',
	startX: 5,
	startY: -1,
	pos: [
	    { x: -1, y: 0 },
	    { x: 0, y: 0},
	    { x: -1, y: -1 },
	    { x: 0, y: -1 }
	],
	getImage: function() { return getRandomColor(); },
	kickType: 'standard'
    },
    j: {
	spin: 'block',
	startX: 4,
	startY: -1,
	pos: [
	    { x: -1, y: -1 },
	    { x: -1, y: 0 },
	    { x: 0, y: 0 },
	    { x: 1, y: 0 }
	],
	getImage: function() { return getRandomColor(); },
	kickType: 'standard'
    },
    l: {
	spin: 'block',
	startX: 4,
	startY: -1,
	pos: [
	    { x: -1, y: 0 },
	    { x: 0, y: 0 },
	    { x: 1, y: 0 },
	    { x: 1, y: -1 }
	],
	getImage: function() { return getRandomColor(); },
	kickType: 'standard'
    },
    s: {
	spin: 'block',
	startX: 4,
	startY: -1,
	pos: [
	    { x: -1, y: 0 },
	    { x: 0, y: 0 },
	    { x: 0, y: -1 },
	    { x: 1, y: -1 }
	],
	getImage: function() { return getRandomColor(); },
	kickType: 'standard'
    },
    z: {
	spin: 'block',
	startX: 4,
	startY: -1,
	pos: [
	    { x: -1, y: -1 },
	    { x: 0, y: -1 },
	    { x: 0, y: 0 },
	    { x: 1, y: 0 }
	],
	getImage: function() { return getRandomColor(); },
	kickType: 'standard'
    },
    t: {
	spin: 'block',
	startX: 4,
	startY: -1,
	pos: [
	    { x: -1, y: 0 },
	    { x: 0, y: 0 },
	    { x: 0, y: -1 },
	    { x: 1, y: 0 }
	],
	getImage: function() { return getRandomColor(); },
	kickType: 'standard'
    }
    
};
