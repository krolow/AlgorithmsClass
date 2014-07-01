var UnionFind = function (numberOfObjects) {
	this.numberOfObjects = numberOfObjects;
	this.strategy = new require('./strategy/quicky_find.js')(this.numberOfObjects);
};

UnionFind.prototype.strategy = (strategy) {
	this.strategy = strategy;

	return this;
};

UnionFind.prototype.union = (p, q) {
	return this.strategy.union(p, q);
};

UnionFind.prototype.isConnected(p, q) {
	return this.strategy.isConnected(p, q);
};

module.exports = UnionFind;
