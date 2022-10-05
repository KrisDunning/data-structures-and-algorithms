'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }
  push(value) {
    const node = new Node(value);
    if(!this.top){
      this.top = node;
      return;
    }
    let current = node;
    current.next=this.top;
    this.top=current;
  }
  pop(){
    if(!this.top){
      console.error('RAISED EXCEPTION: Stack is empty.');
    }
    let popValue= this.top.value;
    this.top=this.top.next;
    return popValue;
  }
}



function validateBrackets(string){
  if(typeof(string)!=='string'||string===null){
    return (console.log('Please provide a valid string'));
  }
  let openStack = new Stack();
  let closedStack = new Stack();
  for(let i = 0; i<string.length;i++){
    if(string[i]==='('||string[i]==='{'||string[i]==='['){
      openStack.push(string[i]);
    }
    if(string[i]===')'||string[i]==='}'||string[i]===']'){
      closedStack.push(string[i]);
    }
  }
  let openPop;
  let closedPop;
  let openCurrent=openStack.top;
  let closedCurrent=closedStack.top;
  console.log('openStack: ',openStack);
  console.log('closedStack: ',closedStack);
  if(!openCurrent||!closedCurrent){
    return 'false';
  }
  while(openCurrent&&closedCurrent){
    openPop=openStack.pop();
    closedPop=closedStack.pop();
    console.log('Open Pop: ',openPop);
    console.log('Closed Pop: ',closedPop);
    if(openPop==='('&& closedPop===')'
      ||openPop==='{' && closedPop==='}'
      ||openPop==='[' && closedPop===']'){
      console.log('match');
    }
    else{
      return 'false';
    }
    openCurrent=openCurrent.next;
    closedCurrent=closedCurrent.next;
  }
  console.log('done with while and returning true');
  return 'true';
}


console.log(validateBrackets('['));
console.log(validateBrackets('{}'));
console.log(validateBrackets('(]'));
console.log(validateBrackets('[sssdd.]'));
console.log(validateBrackets('{({)}}'));
