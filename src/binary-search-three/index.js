class Node {
	constructor(nodeValue) {
		this.value = nodeValue;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor (initValue) {
		this.root = new Node(initValue)
		this.size = 0;
	}

	searchNode(nodeValue) {
		const search = (currentNode) => {
			if(nodeValue < currentNode.value) {
				if(!currentNode.left) {
					console.log(currentNode)
					currentNode.left = new Node(nodeValue);
					return;
				}
				return search(currentNode.left)
			} else if(nodeValue > currentNode.value) {
				if(!currentNode.right){
					console.log(currentNode)
					currentNode.right = new Node(nodeValue);
					return;
				}
				return search(currentNode.right)
			} else {
				return null
			}
		}
		return search
	}

	addNode(nodeValue) {
		console.log('nodeValue',nodeValue)
		this.size++;
		const searchNode = (currentNode) => {
			if(nodeValue < currentNode.value) {
				if(!currentNode.left) {
					console.log(currentNode)
					currentNode.left = new Node(nodeValue);
					return;
				}
				return searchNode(currentNode.left)
			} else if(nodeValue > currentNode.value) {
				if(!currentNode.right){
					console.log(currentNode)
					currentNode.right = new Node(nodeValue);
					return;
				}
				return searchNode(currentNode.right)
			} else {
				return null
			}
		}
/*
		let current = this.root;
		while(current) {

			if(newNode.value < current.value) {
				if(!current.left) {
					console.log(current)
					current.left = newNode;
				}
				current = current.left;
			} else if(newNode.value > current.value) {
				if(!current.right){
					console.log(current)
					current.right = newNode
				}
				current = current.right;
			} else {
				break
			}
		}
*/
		searchNode(this.root)
	}

	contains(value) {
		let res = true;
		let current = this.root;
		while(current) {
			res = value === current.value;
			if(value <= current.value){
				current = current.left;
			}else if(value >= current.value){
				current = current.right;
			}
		}
		return res
	}

	remove(value) {

		const searchNode = (currentNode, prevNode) => {
			if(value < currentNode.value) {
				if(!currentNode.left) {
					return false;
				}
				return searchNode(currentNode.left, currentNode)
			} else if(value > currentNode.value) {
				if(!currentNode.right){
					return false;
				}
				return searchNode(currentNode.right, currentNode)
			} else {
				const tempNode = currentNode;
				if(currentNode.value === prevNode.left.value) {
					prevNode.left = null;
				} else if(currentNode.value === prevNode.right.value){
					prevNode.right = null
				}
				return tempNode;
			}
		}
		return searchNode(this.root, null)

	}

	find(value) {
		const searchNode = (currentNode) => {
			if(value < currentNode.value) {
				if(!currentNode.left) {
					return false;
				}
				return searchNode(currentNode.left)
			} else if(value > currentNode.value) {
				if(!currentNode.right){
					return false;
				}
				return searchNode(currentNode.right)
			} else {
				return currentNode
			}
		}
		return searchNode(this.root)
	}

	minNode() {
		let res = null;
		let currentNode = this.root;
		while(!res) {
			if(currentNode.left !== null){
				currentNode = currentNode.left;
			} else {
				res = currentNode
			}
		}
		return res
	}

	maxNode() {
		let res = null;
		let currentNode = this.root;
		while(!res) {
			if(currentNode.right !== null){
				currentNode = currentNode.right;
			} else {
				res = currentNode
			}
		}
		return res
	}

}
console.log('wtf')
const bst = new BinaryTree(10);
bst.addNode(5)
bst.addNode(2)
bst.addNode(3)
bst.addNode(15)
console.log(bst.contains(2), bst.contains(4), bst.contains(3), bst.size)
console.log('min', bst.minNode())
console.log('max', bst.maxNode())
console.log('--------------')
console.log(`find node ${15}`, bst.find(15))
console.log(`find node ${5}`, bst.find(5))
console.log(`find node ${1}`, bst.find(1))
console.log(bst.remove(2));
console.log(`find node ${2}`, bst.find(2))
bst.remove(5)
console.log(`find node ${3}`, bst.find(3))
