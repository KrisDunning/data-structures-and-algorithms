'use strict';

const { LinkedList } = require('./linked-list');


class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let charactersArray = key.split('');
    let asciiTotal = charactersArray.reduce((total, character) => {
      return total + character.charCodeAt(0);
    }, 0);


    let hash = asciiTotal * 601;
    return hash % this.size;
  }


  set(key, value) {
    let bucket = new LinkedList;
    let hashedKey = this.hash(key);
    let pair = { [key]: value };
    bucket.insert(pair);
    this.buckets[hashedKey]=bucket;
  }

  get(key) {
    let hashedKey = this.hash(key);
    return Object.values(this.buckets[hashedKey].head.value);
  }

  has(key) {
    let hashedKey = this.hash(key);
    if(this.buckets[hashedKey]){
      return true;
    }
    return null;
  }

  keys() {
    let keyArray=[];
    this.buckets.forEach(bucket => {
      if(bucket){
        keyArray.push(Object.keys(bucket.head.value));
      }
    });
    return keyArray;
  }

}


// let table = new HashTable(1024);
// console.log(table);
// console.log(table.hash('Ryan'));
// console.log(table.hash('Audrey'));
// table.set('Kai','my son');
// table.set('Audrey', 'Audrey');
// table.set('Ryan', 'Ryan');
// console.log(table);
// console.log(JSON.stringify(table.buckets[650]));
// console.log(JSON.stringify(table.buckets[730]));
// console.log(table.get('Ryan'));
// console.log(table.get('Kai'));
// console.log(table.has('Ryan'));
// console.log(table.has('Audrey'));
// console.log(table.has('Kai'));
// console.log('this is all keys: ',table.keys())

module.exports=HashTable;
