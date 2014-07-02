/**
 * QuickUnion alogorithm
 *
 * @param {Int} numberOfItems The number of items
 */
var QuickUnion = function (numberOfItems) {
	this.map = new Array(numberOfItems);
	this.sizes = new Array(numberOfItems);

	for (var i=0; i<numberOfItems; i++) {
		this.map[i] = i;
		this.sizes[i] = 1;
	}
};

/**
* Union two points
*
* @param  {Int} p First Point
* @param  {Int} q Second Point
* @return {void}
*/
QuickUnion.prototype.union = function (p, q) {
	if (this.isConnected(p, q)) {
		return;
	}

	var pRoot = this.root(p);
	var qRoot = this.root(q);

	if (this.sizes[pRoot] > this.sizes[qRoot]) {
		this.sizes[qRoot]++;
		this.map[qRoot] = this.root(p);
		return;
	}

	this.sizes[pRoot]++;
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
