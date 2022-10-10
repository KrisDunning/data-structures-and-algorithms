# Stack and Queue Animal Shelter
<!-- Short summary or background information -->
Practice your queue structures in completing the challenge below.

## Challenge
<!-- Description of the challenge -->
Create a class called AnimalShelter which holds only dogs and cats.
The shelter operates using a first-in, first-out approach.
Implement the following methods:

- [x] enqueue
Arguments: animal
animal should be either a 'Cat' or 'Dog'

- [x] dequeue
Arguments: pref
pref can be either 'Dog' or 'Cat'
Return: either a dog or a cat, based on preference.
If pref is not 'Dog' or 'Cat' then return null.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
[WhiteBoard](Challenge12.png)

Big O should be 0(1).

## API
<!-- Description of each method publicly available to your Linked List -->
shelter.enqueue(animal) // enters either 'Cat' or 'Dog' into the queue.
shelter.dequeue(pref) // removes first instance of preferred animal ('Cat' or 'Dog')
