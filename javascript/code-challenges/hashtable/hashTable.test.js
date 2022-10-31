'use strict';
const HashTable = require('./index');

describe ('Hash Table', ()=>{

  it('Can successfully create a table',()=>{
    let table = new HashTable(1024);
    expect(table).toBeInstanceOf(HashTable);
    expect(table.buckets.length).toEqual(1024);
  });

  it('Can successfully set a key value pair to the table',()=>{
    let table = new HashTable(1024);
    table.set('Kai','my son');
    expect(table.get('Kai')).toBeTruthy();
  });

  it('Can return true or null for table.has() call when appropriate',()=>{
    let table = new HashTable(1024);
    table.set('Kai','my son');
    table.set('John','some John guy');
    expect(table.has('Kai')).toBeTruthy();
    expect(table.has('Phillip')).toBeNull();
  });

  it('Can return a list of keys within the table',()=>{
    let table = new HashTable(1024);
    table.set('Kai','my son');
    table.set('Kamilia','my daughter');
    table.set('Kris', 'thats me');
    expect(table.keys()).toEqual([['Kris'],['Kamilia'],['Kai']]);
  });

});
