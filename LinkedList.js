// Node class represents an individual element in the linked list
class Node {
  constructor(data) {
    this.value = data; // The data value stored in the node
    this.nextNode = null; // Pointer to the next node (initially null)
  }
}

// LinkedList class manages a list of nodes
class LinkedList {
  constructor() {
    this.headNode = null; // The first node of the linked list (initially null)
    this.length = 0; // Tracks the number of nodes in the list
  }

  // Adds a new node to the end of the list
  append(value) {
    const newNode = new Node(value); // Create a new node with the given value
    if (!this.headNode) {
      // If the list is empty, the new node becomes the head
      this.headNode = newNode;
    } else {
      let current = this.headNode; // Start from the head node
      while (current.nextNode) {
        // Traverse until the last node
        current = current.nextNode;
      }
      current.nextNode = newNode; // Link the new node as the last node's next
    }
    this.length++; // Increment the list length
  }

  // Adds a new node to the beginning of the list
  prepend(value) {
    const newNode = new Node(value); // Create a new node with the given value
    if (!this.headNode) {
      // If the list is empty, the new node becomes the head
      this.headNode = newNode;
    } else {
      newNode.nextNode = this.headNode; // Point the new node to the current head
      this.headNode = newNode; // Update the head to the new node
    }
    this.length++; // Increment the list length
  }

  // Returns the size of the list
  size() {
    return console.log("The quantity of items in the list is: ", this.length);
  }

  // Returns the first node (head) of the list
  head() {
    return console.log("First item of the list is:", this.headNode);
  }

  // Returns the last node (tail) of the list
  tail() {
    let current = this.headNode; // Start from the head node
    if (!current) return console.log("The list is empty"); // Handle empty list case

    while (current.nextNode) {
      // Traverse to the last node
      current = current.nextNode;
    }
    return console.log("Last item of the list is:", current);
  }

  // Returns the node at a specified index
  at(index) {
    if (this.length <= 0 || this.length < index) {
      // Check if the index is valid
      return console.log("There's no item at this index");
    }

    let current = this.headNode; // Start from the head node
    for (let i = 0; i < index; i++) {
      // Traverse to the specified index
      current = current.nextNode;
    }
    return console.log("The item at index", index, "is:", current);
  }

  // Removes the last node of the list
  pop() {
    if (!this.headNode) return console.log("The list is empty"); // Handle empty list case

    if (this.length === 1) {
      // If there's only one node, remove the head
      const nodeToRemove = this.headNode;
      this.headNode = null;
      this.length--;
      return nodeToRemove; // Return the removed node
    }

    let current = this.headNode; // Start from the head node

    while (current.nextNode && current.nextNode.nextNode) {
      // Traverse to the second-to-last node
      current = current.nextNode;
    }

    const nodeToRemove = current.nextNode; // Store the last node
    current.nextNode = null; // Remove the last node by updating the pointer
    this.length--; // Decrement the list length
    return nodeToRemove; // Return the removed node
  }

  // Checks if a value exists in the list
  contains(value) {
    let current = this.headNode; // Start from the head node
    while (current) {
      // Traverse through the list
      if (current.value === value) return true; // Value found
      current = current.nextNode;
    }
    return false; // Value not found
  }

  // Finds the index of a node with a specific value
  find(value) {
    let current = this.headNode; // Start from the head node
    let index = 0; // Initialize index counter
    while (current) {
      // Traverse through the list
      if (current.value === value) return index; // Value found
      current = current.nextNode;
      index++;
    }
    return null; // Value not found
  }

  // Returns a string representation of the list
  toString() {
    let current = this.headNode; // Start from the head node
    let result = ""; // Initialize an empty string

    while (current) {
      // Traverse through the list
      result += `( ${current.value} ) -> `; // Append each node's value to the string
      current = current.nextNode;
    }
    return console.log(result + "null"); // Append 'null' to indicate the end of the list
  }
}

// Create an instance of LinkedList
const list = new LinkedList();

// Append elements to the list
list.append("First");
list.append("Second");
list.append("Third");

// Prepend an element to the list
list.prepend("Zero");

// Display the size of the list
list.size(); // The quantity of items in the list is: 4

// Show the first item (head)
list.head(); // First item of the list is: Node { value: 'Zero', nextNode: Node {...} }

// Show the last item (tail)
list.tail(); // Last item of the list is: Node { value: 'Third', nextNode: null }

// Access an element by index
list.at(2); // The item at index 2 is: Node { value: 'Second', nextNode: Node {...} }

// Check if a value exists in the list
console.log(list.contains("Second")); // true
console.log(list.contains("Fourth")); // false

// Find the index of a value in the list
console.log(list.find("Third")); // 3
console.log(list.find("Fourth")); // null

// Print the list as a string
list.toString(); // ( Zero ) -> ( First ) -> ( Second ) -> ( Third ) -> null

// Remove the last element
list.pop();
list.toString(); // ( Zero ) -> ( First ) -> ( Second ) -> null
