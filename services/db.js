/**
 * List itens.
 * @type {Array}
 */
let $list = [];

/**
 * Push itens in $list. If array, input each item from it.
 * @param {Object} Anything.
 * @return {Object} Service db.
 */
let add = function (item) {

	if (Array.isArray(item)) {

		item.forEach(function (subitem) {

			$list.push(subitem);
		});

		return this;
	}

	$list.push(item);
	return this;
}

let getLastItem = function () {
	
	return $list[$list.length - 1];
}

/**
 * Remove a item in list.
 * @param  {Object} Anything.
 * @return {Object} Service db.
 */
let remove = function (item) {
	
	let index = $list.indexOf(item);

	if (index > -1) {

    	$list.splice(index, 1);
	}
	return this;
}

/**
 * @return {Array} Return the list;
 */
let list = function () {
	
	return $list;
}

exports.add = add;
exports.remove = remove;
exports.list = list;
exports.getLastItem = getLastItem;

exports.$name = 'db';