
//dependency
const Fifo = require('fifo')

/*
Wrap a fifo implementation with a length limit
*/
export default class MyFIFO {
	constructor(size) {
		this.fifo = Fifo();
		this.size = size
	}

	//add a new message to buffer, then if too large, remove oldest
	newMsg(msg) {
		this.fifo.push(msg)
		this.enforceLimitDiscardOld()
		// while (this.fifo.length > this.size) {
		// 	this.fifo.shift()
		// }
	}

	//output current content of buffer
	print() {
		this.fifo.forEach((el) => {
  			console.log(el)
  		})
	}

	//set size
	setSize(size) {
		this.size = size
		this.enforceLimitDiscardOld() //if buffer is too large, discard old
	}

	//discard old stuff to stay within size limit
	enforceLimitDiscardOld() {
		while (this.fifo.length > this.size) {
			this.fifo.shift()
		}
	}

	length() {
		return this.fifo.length;
	}
}
