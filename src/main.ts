import './style.css'

//import './bases/02-template.ts';
// import './bases/03-object-literal';
//import './bases/04-arrays';
//import './bases/05-functions';
//import './bases/06-obj-destructuring'
//import './bases/07-arrary-destructuring'
//import './bases/08-imp-exp'
import './bases/09-promises'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola Mundo</h1>
  </div>
`
// import { getHeroesByOwner } from './bases/08-imp-exp';
// import { Owner } from './data/heroes.data'; // We need the Enum to call the function

//  Test: Get only Marvel heroes
// const marvelHeroes = getHeroesByOwner(Owner.Marvel);
// console.log(marvelHeroes); // [ {Spiderman...}, {Wolverine...} ]

//  Test: Get only DC heroes
// const dcHeroes = getHeroesByOwner(Owner.DC);
// console.log(dcHeroes); // [ {Batman...}, {Superman...}, {Flash...} ]

