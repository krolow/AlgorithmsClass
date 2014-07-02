/**
 * QuickUnion alogorithm
 *
 * @param {Int} numberOfItems The number of items
 */
var QuickUnion = function (numberOfItems) {
	this.map = this.generateMap(numberOfItems);
};

/**
* Generate a map array with the index
*
* @param {Int} numberOfObjects Number of items
*/
QuickUnion.prototype.generateMap = function (numberOfItems) {
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
QuickUnion.prototype.union = function (p, q) {
	if (this.isConnected(p, q)) {
		return;
	}

	this.map[this.root(p)] = this.root(q);
};

/**
* Determine if 2 points are connected
*
* @param {Int} p First point
* @param {Int} q Second point
* @return {Boolean}
*/
QuickUnion.prototype.isConnected = function (p, q) {
	return this.root(p) === this.root(q);
};

/**
 * Retrive root of a determine point
 *
 * @param {Int} point The point to get the root
 */
QuickUnion.prototype.root = function (point) {
	while (point !== this.map[point]) {
		point = this.map[point];
	}

	return point;
};

module.exports = QuickUnion;
