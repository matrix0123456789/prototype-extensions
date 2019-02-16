Simple methods added to natie browser objects.
# Basic samples
``` javascript
var array = [5,2,-3,11];
console.log(array.min(x=>x))// -> -3
console.log(array.min(x=>Math.abs(x)))// -> 2
console.log(array.sum(x=>(x>0)?1:0))// -> 3
```

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
var section=document.body.addChild('section', {className:'big red'});
section.addChild('h1', {text:'Title'});
section.addChild('p', {text:'Paragraph'});
section.addChild('p', {text:'Paragraph'});
```