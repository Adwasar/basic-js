
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
    let result = `'( ${chainMaker.arr.join(" )~~( ")} )'`;

    chainMaker.arr = [];

    return result;
  }

};



