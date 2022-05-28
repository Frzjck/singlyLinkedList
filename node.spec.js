const {
    Node
} = require("./node_class.js");

describe("", () => {
    let node1, node2, node3, node4;

    beforeAll(() => {
        node1 = new Node(1);
        node2 = new Node(2);
        node3 = new Node(3);
        node4 = new Node(4);
    });

    it("should create an object", () => {
        const isObject = node1 instanceof Object;
        expect(isObject).toEqual(true);
    });

    it("should create a Node", () => {
        const result = {
            val: 1,
            next: null
        };
        expect(node1).toEqual(result);
    });
    it("should allow chaining", () => {
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        const result = {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: {
                        val: 4,
                        next: null
                    }
                }
            }
        };
        expect(node1).toEqual(result);
    });

});