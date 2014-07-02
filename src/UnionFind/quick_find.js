/**
 * QuickFind alorithm
 *
 * @param {Int} numberOfItems Number of items to determine
 */
var QuickFind = function (numberOfItems) {
	this.map = this.generateMap(numberOfItems);
};

/**
 * Generate a map array with the index
 *
 * @param {Int} numberOfObjects Number of items
 */
QuickFind.prototype.generateMap = function (numberOfItems) {
	var map = new Array(numberOfItems);
	for (var i=0; i<numberOfItems; i++) {
		map[i] = i;
	}

	return map;
};

/**
 * Union two points
 *
 * @param  {Int} p First Point
 * @param  {Int} q Second Point
 * @return {QuickFind} Quick find reference object
 */
QuickFind.prototype.union = function (p, q) {
	if (this.isConnected(p, q)) {
		return;
	}
		
	var pId = this.map[p];
	var qId = this.map[q];

	for (var i=0; i<this.map.length; i++) {
		if (this.map[i] == pId) {
			this.map[i] = qId;
		}
	}

	return this;
};

/**
 * Determine if 2 points are connected
 *
 * @param {Int} p First point
 * @param {Int} q Second point
 * @return {Boolean}
 */
QuickFind.prototype.isConnected = function (p, q) {
	return this.map[p] === this.map[q];
};

module.exports = QuickFind;
