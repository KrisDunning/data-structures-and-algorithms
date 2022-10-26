let Movies = require('./movies');
let { inGenre, sortTitle, sortYear, sortYearComparer, sortTitleComparer } = require('./sort');



describe('Comparers', () => {

  it('sortYearComparer correctly compares numbers', () => {
    let num1 = { year: '1' };
    let num2 = { year: '2' };
    let returnOne = sortYearComparer(num2, num1);
    let returnNegOne = sortYearComparer(num1, num2);
    let returnZero = sortYearComparer(num1, num1);
    console.log('--------------------------',returnOne,returnNegOne,returnZero);
    expect(returnOne).toBe(1);
    expect(returnNegOne).toBe(-1);
    expect(returnZero).toBe(0);
  });

  it('sortTitleComparer correctly removes "The" and sort alphabetically',()=>{
    let title1={title:'The Comedy Movie'};
    let title2={title:'Da Movie Title'};
    let returnOne = sortTitleComparer(title2, title1);
    let returnNegOne = sortTitleComparer(title1, title2);
    let returnZero = sortTitleComparer(title1, title1);
    console.log('********************', returnOne,returnNegOne,returnZero);
    expect(returnOne).toBe(1);
    expect(returnNegOne).toBe(-1);
    expect(returnZero).toBe(0);

  });

});


describe('Sorters', () => {
  it('can sort movies by year', () => {
    const movies = sortYear(Movies, sortYearComparer);
    expect(movies.map((m) => m.title)).toEqual([
      'The Cotton Club',
      'Crocodile Dundee',
      'Beetlejuice',
      'The Shawshank Redemption',
      'Memento',
      'City of God',
      'Ratatouille',
      'Stardust',
      'Valkyrie',
      'The Intouchables',
    ]);
  });

  it('can sort movies by title', () => {
    const movies = sortTitle(Movies, sortTitleComparer);
    expect(movies.map((m) => m.title)).toEqual([
      'Beetlejuice',
      'City of God',
      'The Cotton Club',
      'Crocodile Dundee',
      'The Intouchables',
      'Memento',
      'Ratatouille',
      'The Shawshank Redemption',
      'Stardust',
      'Valkyrie',
    ]);
  });

  it('can find movies by genre', () => {
    const movies = sortYear(inGenre(Movies, 'Adventure'));
    expect(movies.map((m) => m.title)).toEqual([
      'Crocodile Dundee',
      'Stardust',
    ]);
  });
});
