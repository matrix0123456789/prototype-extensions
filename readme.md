[![npm](https://badgen.net/npm/v/prototype-extensions)](https://www.npmjs.com/package/prototype-extensions)
[![downloads](https://badgen.net/npm/dt/prototype-extensions)](https://www.npmjs.com/package/prototype-extensions)
[![downloads](https://badgen.net/npm/license/prototype-extensions)](https://www.npmjs.com/package/prototype-extensions)
[![downloads](https://badgen.net/npm/dependents/prototype-extensions)](https://www.npmjs.com/package/prototype-extensions)

Simple methods added to native browser objects.

#DOM extensions
To generate:
``` HTML
<section class="big red">
<h1>Title</h1>
<p>Paragraph</p>
<p>Paragraph</p>
</section>
```

in clean javascript

``` javascript
let section=document.createElement('section');
section.className='big red';
let h1=document.createElement('h1');
h1.textContent='Title';
section.appendChild(h1);
let p1=document.createElement('p');
p1.textContent='Paragraph';
section.appendChild(p1);
let p2=document.createElement('p');
p2.textContent='Paragraph';
section.appendChild(p2);
document.body.appendChild(section);
```
you type:
```javascript
var section=document.body.addChild('section.big.red');
section.addChild('h1', {text:'Title'});
section.addChild('p', {text:'Paragraph'});
section.addChild('p', {text:'Paragraph'});
```

# Array extensions
``` javascript
var array = [5,2,-3,11];
console.log(array.min(x=>x))// -> -3
console.log(array.min(x=>Math.abs(x)))// -> 2
console.log(array.sum(x=>(x>0)?1:0))// -> 3
```
