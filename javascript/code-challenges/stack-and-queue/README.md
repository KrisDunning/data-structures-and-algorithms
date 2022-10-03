# Stack and Queue
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->

Using knowledge of Nodes and Linked List structures, write your own implementation of stacks and queues.

### Stack

- [x]Create a Stack class that has a top property. It creates an empty Stack when instantiated.
This object should be aware of a default empty value assigned to top when the stack is created.
The class should contain the following methods:

- [x]push
Arguments: value
adds a new node with that value to the top of the stack with an O(1) Time performance.

- [x]pop
Arguments: none
Returns: the value from node from the top of the stack
Removes the node from the top of the stack
Should raise exception when called on empty stack

- [x]peek
Arguments: none
Returns: Value of the node located at the top of the stack
Should raise exception when called on empty stack

- [x]is empty
Arguments: none
Returns: Boolean indicating whether or not the stack is empty.

### Queue

- [x] Create a Queue class that has a front property. It creates an empty Queue when instantiated.
This object should be aware of a default empty value assigned to front when the queue is created.
The class should contain the following methods:

- [x] enqueue
Arguments: value
adds a new node with that value to the back of the queue with an O(1) Time performance.

- [x]dequeue
Arguments: none
Returns: the value from node from the front of the queue
Removes the node from the front of the queue
Should raise exception when called on empty queue

- [x]peek
Arguments: none
Returns: Value of the node located at the front of the queue
Should raise exception when called on empty stack

- [x]is empty
Arguments: none
Returns: Boolean indicating whether or not the queue is empty

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Big O should be 0(1).

## API
<!-- Description of each method publicly available to your Linked List -->
stack.push(value) // Add a value to stack at the top
stack.pop() // Removes and returns the value from the top of the stack
stack.peek() // Looks at the top value of the stack
stack.isEmpty() // Returns True if empty, else false

queue.enqueue(value) // Add a value to end of queue
queue.dequeue() // Removes and returns the value at front of the queue
queue.peek() // Looks at the value at front of the queue
queue.isEmpty() // Returns True if empty, else false
