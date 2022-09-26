'use strict';

let {LinkedList} = require ('./index');



describe ('Linked List', ()=>{
  it('Can instantiate an empty linked list', ()=>{
    let newlist = new LinkedList();
    expect(newlist).toBeInstanceOf(LinkedList);
  });

  it('Can properly insert into the linked list',()=>{
    let list = new LinkedList();
    list.insert(4);
    expect(list.head.value).toEqual(4);
  });

  it('The head property will properly point to the first node in the linked list',()=>{
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    expect(list.head.value).toEqual(3);
  });

  it('Can properly insert multiple nodes into the linked list',()=>{
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(2);
    let current=list.head;
    let length=0;
    while(current){
      length++;
      current=current.next;
    }
    expect(length).toEqual(3);
  });

  it('Will return true when finding a value within the linked list that exists',()=>{
    let list= new LinkedList();
    list.insert(99);
    expect(list.includes(99)).toEqual(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist',()=>{
    let list = new LinkedList();
    list.insert(55);
    expect(list.includes(66)).toEqual(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list',()=>{
    let list = new LinkedList();
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.toString()).toBe('{1}->{2}->{3}->{4}->NULL');
  });

});

