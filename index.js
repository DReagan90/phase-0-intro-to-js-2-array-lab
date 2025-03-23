// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield')

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);}
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield')
    function destructivelyPrependCat(bob) {
        cats.unshift(bob)
    }
    
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield')

    function destructivelyRemoveLastCat(){
        cats.pop()
    }

    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield')

    function destructivelyRemoveFirstCat(){
        cats.shift()
    }
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield')

          
    function appendCat(Broom) {
      return [...cats, Broom];
    }
    
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield')


    function prependCat(Arnold) {
      return [Arnold, ...cats];
    }
     
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield')
       
    function removeLastCat() {
      return cats.slice(0, -1);
    }
    
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield')

    function removeFirstCat() {
      return cats.slice(1);
    
    }
    