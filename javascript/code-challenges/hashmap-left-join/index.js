'use strict';

function leftJoin(map1,map2){
  let returnStructure=[];
  let valueMap2='NULL';

  function join(value,key){
    valueMap2='NULL';
    if(map2.has(key)){
      valueMap2=map2.get(key);
    }
    returnStructure.push([key,value,valueMap2]);
  }
  map1.forEach(join);
  return returnStructure;
}
// let mapA= new Map();
// let mapB= new Map();

// mapA.set('diligent','employed');
// mapA.set('fond','enamored');
// mapA.set('guide','usher');
// mapA.set('outfit','garb');
// mapA.set('wrath','anger');

// mapB.set('diligent','idle');
// mapB.set('fond','averse');
// mapB.set('guide','follow');
// mapB.set('flow','jam');
// mapB.set('wrath','delight');

// console.log(leftJoin(mapA,mapB));

module.exports= leftJoin;
