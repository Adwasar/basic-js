const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  arr: [],

  addLink(value) {
    chainMaker.arr.push(`${value}`);
    return chainMaker;
  },

  getLength() {
    return chainMaker.arr.length;
  },
  
  removeLink(position) { 
    if (Number.isNaN(Number(position)) || !chainMaker.arr[position - 1]) {
      chainMaker.arr = [];
      throw new Error("You can't remove incorrect link!");
    }

    chainMaker.arr.splice(position - 1, 1);
    return chainMaker;
  },

  reverseChain() {
    chainMaker.arr.reverse();
    return chainMaker;
  },

  finishChain() {
    return `( ${chainMaker.arr.join(" )~~( ")} )`;
  }

};

module.exports = {
  chainMaker
};
