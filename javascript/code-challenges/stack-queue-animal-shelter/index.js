'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter{
  constructor(){
    this.front = null;
  }

  enqueue(animal){
    if(animal!=='Cat' && animal!=='Dog'){
      return (console.log('Cat and Dog only'));
    }
    let node= new Node(animal);
    if(!this.front){
      this.front=node;
      return;
    }
    let current=this.front;
    while(current.next){
      current=current.next;
    }
    current.next=node;
  }

  dequeue(pref){
    if(!this.front){
      console.error('ERROR! Queue is empty.');
      return;
    }
    let current=this.front;
    if (this.front.value===pref){
      let dqValue=this.front.value;
      this.front=current.next;
      return dqValue;
    }
    let animalsIndex=0;
    let animalsNext=null;
    let dqValue=null;
    while(current){
      animalsIndex++;
      if(current.value===pref){
        animalsNext=current.next;
        dqValue=current.value;
        break;
      }
      current=current.next;
    }
    if(dqValue){
      current=this.front;
      for(let i=1;i<=animalsIndex;i++){
        if(i===animalsIndex-1){
          current.next=animalsNext;
        }
        if(current.next){
          current=current.next;
        }
      }

    }
    return dqValue;
  }
}

module.exports = {AnimalShelter};
