function getEmptyBranch(tree) {
	const result = [];
	const iterable = [tree];

	for (let i = 0; i < iterable.length; i++) {
		if (iterable[i].right === null || iterable[i].left === null) {
			result.push(iterable[i]);
		}
		if (iterable[i].left) {
			iterable.push(iterable[i].left);
		}
		if (iterable[i].right) {
			iterable.push(iterable[i].right);
		}

	}
	console.log(iterable)
	console.log(result)
	return result.length - 1;
}

function getPath(tree) {
	const iterable = [tree];
	const result = [];

	for (let i = 0; i < iterable.length; i++) {
		if (iterable[i].left) {
			iterable.push(iterable[i].left);
		}
		if (iterable[i].right) {
			iterable.push(iterable[i].right);
			result.push(iterable[i].right);
		}

	}
	console.log(iterable)
	console.log(result)
	return result.length - 1;
}

function checkingEquivalent(tree) {
	const iterable = [tree];
	const result = [];
	for (let i = 0; i < iterable.length; i++) {
		if (iterable[i].left) {
			iterable.push(iterable[i].left);
		}
		if (iterable[i].right) {
			iterable.push(iterable[i].right);
		}
		if ((iterable[i].right == null && iterable[i].left == null) && (iterable[i].value == iterable[i].value)) {
			result.push(iterable[i]);

		}
	}

	return result.filter(eq => eq.value == 2 && eq.left == null && eq.right == null)
}
class Tree {
	constructor(value, left, right) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}




const treeObj = new Tree(5, new Tree(3, new Tree(2, null, null), new Tree(5, null, null)), new Tree(7, new Tree(1, null, null), new Tree(0, new Tree(2, null, null), new Tree(8, null, new Tree(5, null, null)))))
console.log(getEmptyBranch(treeObj));
console.log(getPath(treeObj));
console.log(checkingEquivalent(treeObj))








