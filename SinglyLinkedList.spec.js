const {
    SinglyLinkedList
} = require("./SinglyLinkedList_class");

let list;
beforeEach(() => list = new SinglyLinkedList());

describe("Per se", () => {
    it("should create an object", () => {
        expect(list instanceof Object).toEqual(true);
    });
    it("should have a length of 0 on creation", () => {
        expect(list.length).toEqual(0);
    });
});

describe("push method", () => {
    it("should return new length", () => {
        expect(list.push(1)).toEqual(1);
        expect(list.push(3)).toEqual(2);
        expect(list.push(8)).toEqual(3);
        expect(list.push(19)).toEqual(4);
    });
    it("should add new node to the end of the list", () => {
        list.push(1);
        expect(list).toEqual({
            length: 1,
            head: {
                val: 1,
                next: null
            },
            tail: {
                val: 1,
                next: null
            }
        });
        list.push(2);
        expect(list).toEqual({
            length: 2,
            head: {
                val: 1,
                next: {
                    val: 2,
                    next: null
                }
            },
            tail: {
                val: 2,
                next: null
            }
        });
        list.push(3);
        expect(list).toEqual({
            length: 3,
            head: {
                val: 1,
                next: {
                    val: 2,
                    next: {
                        val: 3,
                        next: null
                    }
                }
            },
            tail: {
                val: 3,
                next: null
            }
        });
    });
    it("should reasign tail property to new node", () => {
        list.push(1);
        expect(list.tail).toEqual({
            val: 1,
            next: null
        });
        list.push(3);
        expect(list.tail).toEqual({
            val: 3,
            next: null
        });
        list.push(8);
        expect(list.tail).toEqual({
            val: 8,
            next: null
        });
        list.push(19);
        expect(list.tail).toEqual({
            val: 19,
            next: null
        });
    });
    it("should accept multiple parammeters", () => {
        expect(list.push("any val1", "any val2", "any val3", "any val4")).toEqual(4);
        expect(list.tail).toEqual({
            val: "any val4",
            next: null
        });
        expect(list).toEqual({
            length: 4,
            head: {
                val: "any val1",
                next: {
                    val: "any val2",
                    next: {
                        val: "any val3",
                        next: {
                            val: "any val4",
                            next: null
                        }
                    }
                }
            },
            tail: {
                val: "any val4",
                next: null
            }
        });
    });
});
describe("getNode method", () => {
    it("should return first elem if arg is 0", () => {
        list.push(1, 2);
        expect(list.getNode(0)).toEqual({
            val: 1,
            next: {
                val: 2,
                next: null
            }
        });
    });
    it("should return second elem if arg is 1", () => {
        list.push(1, 2);
        expect(list.getNode(1)).toEqual({
            val: 2,
            next: null
        });
    });
    it("should return null if arg is out of bounds", () => {
        list.push(1, 2);
        expect(list.getNode(15)).toBe(null);
    });
});

describe("pop method", () => {
    it("should return null if there are no nodes", () => {
        expect(list.pop()).toEqual(null);
        expect(list).toEqual({
            length: 0,
            head: null,
            tail: null
        });
    });
    it("should return last node and modify list correctly if length is 1", () => {
        list.push("any val1");
        expect(list.pop()).toEqual({
            val: "any val1",
            next: null
        });
        expect(list).toEqual({
            length: 0,
            head: null,
            tail: null
        });
    });
    it("should return last node and modify list correctly if length is 2", () => {
        list.push("any val1", "any val2");
        expect(list.pop()).toEqual({
            val: "any val2",
            next: null
        });
        expect(list).toEqual({
            length: 1,
            head: {
                val: "any val1",
                next: null
            },
            tail: {
                val: "any val1",
                next: null
            }
        });
        expect(list.pop()).toEqual({
            val: "any val1",
            next: null
        });
        expect(list).toEqual({
            length: 0,
            head: null,
            tail: null
        });
    });
    it("should return last node and modify list correctly if length is 2+", () => {
        list.push("any val1", "any val2", "any val3", "any val4");
        expect(list.pop()).toEqual({
            val: "any val4",
            next: null
        });
        expect(list).toEqual({
            length: 3,
            head: {
                val: "any val1",
                next: {
                    val: "any val2",
                    next: {
                        val: "any val3",
                        next: null
                    }
                }
            },
            tail: {
                val: "any val3",
                next: null
            }
        });
        expect(list.pop()).toEqual({
            val: "any val3",
            next: null
        });
        expect(list).toEqual({
            length: 2,
            head: {
                val: "any val1",
                next: {
                    val: "any val2",
                    next: null
                }
            },
            tail: {
                val: "any val2",
                next: null
            }
        });
    });
});
describe("shift method", () => {
    it("should return undefined if arr length is 0", () => {
        expect(list.shift()).toBeNull();
    });
    it("should return first elem if length is 1", () => {
        list.push("any val1");
        expect(list.shift()).toEqual({
            val: "any val1",
            next: null
        });
    });
    it("should set head and tail to null if length is 1", () => {
        list.push("any val1");
        list.shift();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
    });
    it("should reduce length by 1", () => {
        list.push("any val1", "any val2", "any val3", "any val4", "any val5", "any val6");
        expect(list.length).toBe(6);
        list.shift();
        expect(list.length).toBe(5);
        list.shift();
        expect(list.length).toBe(4);
        list.shift();
        expect(list.length).toBe(3);
        list.shift();
        expect(list.length).toBe(2);
        list.shift();
        expect(list.length).toBe(1);
        list.shift();
        expect(list.length).toBe(0);
    });
    it("should not reduce length if length is 0", () => {
        list.shift();
        expect(list.length).toBe(0);
    });
    it("should remove first elem of the list", () => {
        list.push("any val1", "any val2", "any val3", "any val4");
        list.shift();
        expect(list).toEqual({
            length: 3,
            head: {
                val: "any val2",
                next: {
                    val: "any val3",
                    next: {
                        val: "any val4",
                        next: null
                    }
                }
            },
            tail: {
                val: "any val4",
                next: null
            }
        });
        list.shift();
        expect(list).toEqual({
            length: 2,
            head: {
                val: "any val3",
                next: {
                    val: "any val4",
                    next: null
                }
            },
            tail: {
                val: "any val4",
                next: null
            }
        });
        list.shift();
        expect(list).toEqual({
            length: 1,
            head: {
                val: "any val4",
                next: null
            },
            tail: {
                val: "any val4",
                next: null
            }
        });
    });
});