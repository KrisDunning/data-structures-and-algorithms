'use strict';

let { LinkedList } = require('./index');



describe('Linked List', () => {
  //create a list and add some numbers.

  it('Can instantiate an empty linked list', () => {
    let newlist = new LinkedList();
    expect(newlist).toBeInstanceOf(LinkedList);
  });

  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    expect(list.head.value).toEqual(4);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    expect(list.head.value).toEqual(3);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(2);
    let current = list.head;
    let length = 0;
    while (current) {
      length++;
      current = current.next;
    }
    expect(length).toEqual(3);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.insert(99);
    expect(list.includes(99)).toEqual(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(55);
    expect(list.includes(66)).toEqual(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.toString()).toBe('{1}->{2}->{3}->{4}->NULL');
  });

});

describe('Linked-List-Insert', () => {

  it('Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    list.append(88);
    let current = list.head;
    while (current.next) {
      current = current.next;
    }
    expect(current.value).toBe(88);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    list.append(77);
    let current = list.head;
    while (current.next) {
      current = current.next;
    }
    expect(current.value).toBe(77);
    list.append(88);
    current = list.head;
    while (current.next) {
      current = current.next;
    }
    expect(current.value).toBe(88);

  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    list.insertBefore(3, 55);
    expect(list.toString()).toMatch('{1}->{2}->{55}->{3}->{4}->NULL');
    expect(list.insertBefore(10, 1)).toMatch('Supplied Search Value Not Found');

  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    list.insertBefore(1, 33);
    expect(list.head.value).toBe(33);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    list.insertAfter(2, 123);
    expect(list.toString()).toMatch('{1}->{2}->{123}->{3}->{4}->NULL');
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    list.insertAfter(4, 123);
    expect(list.toString()).toMatch('{1}->{2}->{3}->{4}->{123}->NULL');
  });


});

describe('Kth from End of Linked List Method', () => {

  it('Where k is greater than the length of the linked list', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.kthFromEnd(8)).toBeFalsy();
  });

  it('Where k and the length of the list are the same', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.kthFromEnd(4)).toBeFalsy();
  });

  it('Where k is not a positive integer', () => {
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.kthFromEnd(-9)).toBeFalsy();
  });

  it('Where the linked list is of a size 1', () => {
    let list = new LinkedList();
    list.insert(4);
    expect(list.kthFromEnd(0)).toBe(4);
    expect(list.kthFromEnd(1)).toBeFalsy();
  });

  it('"Happy Path" where k is not at the end but somewhere in middle of linked list', () => {
    let list = new LinkedList();
    list.insert(2);
    list.insert(8);
    list.insert(3);
    list.insert(1);
    expect(list.kthFromEnd(3)).toBe(1);
    expect(list.kthFromEnd(2)).toBe(3);
    expect(list.kthFromEnd(1)).toBe(8);
    expect(list.kthFromEnd(0)).toBe(2);
  });

  describe('Zipping two lists together', () => {

    it('"Zip" two linked lists into a single list', () => {
      let list1 = new LinkedList();
      let list2 = new LinkedList();
      let combined = new LinkedList();
      list1.insert(2);
      list1.insert(3);
      list1.insert(1);
      list2.insert(4);
      list2.insert(9);
      list2.insert(5);
      expect(combined.zipLists(list1, list2).toString()).toBe('{1}->{5}->{3}->{9}->{2}->{4}->NULL');
    });
  });
});
