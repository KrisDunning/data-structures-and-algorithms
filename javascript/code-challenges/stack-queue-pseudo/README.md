# Stack and Queue Pseudo
<!-- Short summary or background information -->
Practice your stack and queue structures in completing the challenge below.

## Challenge
<!-- Description of the challenge -->
Create a new class called pseudo queue.
Do not use an existing Queue.
Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),

- []enqueue
Arguments: value
Inserts value into the PseudoQueue, using a first-in, first-out approach.

- []dequeue
Arguments: none
Extracts a value from the PseudoQueue, using a first-in, first-out approach.
Internally, utilize 2 Stack instances to create and manage the queue

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
[WhiteBoard](CodeChallenge11.png)

Big O should be 0(1).

## API
<!-- Description of each method publicly available to your Linked List -->
queue.enqueue(value) // Add a value to queue at end
queue.dequeue() // Remove the value from the front of queue
