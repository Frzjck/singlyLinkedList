const {
    Node
} = require("./node_class.js");

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(...vals) {
        for (let val of vals) {
            let newNode = new Node(val);
            if (this.head === null) {
                this.head = newNode; //
                this.tail = this.head;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length++;
        }
        return this.length;
    }

    getNode(idx) {
        if (idx > this.length - 1) {
            console.log("Out of bounds!");
            return null;
        }
        let current = this.head;
        for (let i = 0; i < idx; i++) current = current.next;
        return current;
    }

    pop() {
        const result = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else if (this.length > 1) {
            this.tail = this.getNode(this.length - 2);
            this.tail.next = null;
        }
        if (this.length > 0) this.length--;
        return result;
    }

    shift() {
        let result = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else if (this.length > 1) this.head = this.head.next;
        if (this.length > 0) this.length--;
        return result;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode; //
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this.length;
    }
}

module.exports = {
    SinglyLinkedList
};