'use strict';
const leftJoin= require('./index');

describe (' HashMap Left Join', ()=>{
  let mapA= new Map();
  let mapB= new Map();

  mapA.set('diligent','employed');
  mapA.set('fond','enamored');
  mapA.set('guide','usher');
  mapA.set('outfit','garb');
  mapA.set('wrath','anger');

  mapB.set('diligent','idle');
  mapB.set('fond','averse');
  mapB.set('guide','follow');
  mapB.set('flow','jam');
  mapB.set('wrath','delight');

  it('Can verify that return structure is an array',()=>{
    expect(leftJoin(mapA,mapB)).toEqual(expect.any(Array));
  });

  it('Can successfully return a left joined Array',()=>{
    let expected=[
      [ 'diligent', 'employed', 'idle' ],
      [ 'fond', 'enamored', 'averse' ],
      [ 'guide', 'usher', 'follow' ],
      [ 'outfit', 'garb', 'NULL' ],
      [ 'wrath', 'anger', 'delight' ]
    ];
    expect(leftJoin(mapA,mapB)).toEqual(expect.arrayContaining(expected));
  });

  it('Can successfully return empty array when passed empty maps',()=>{
    let mapMM = new Map();
    let mapTT = new Map();
    expect(leftJoin(mapMM,mapTT)).toStrictEqual([]);
  });
});
