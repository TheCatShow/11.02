const elem = document.querySelector('#elem');
let color = document.querySelector('.color');
let append = document.querySelector('.append');
let children = document.querySelector('.children')
let node = document.querySelector('.node');
const body = document.body;
document.getElementById('elem').parentNode

const firstChild = elem.firstChild;
console.log(firstChild);

elem.firstElementChild.style.color = 'red';

const lastChild = elem.lastChild;
console.log(lastChild);

elem.lastElementChild.style.color = 'red';

let parent = elem3.closest("#elem3");
console.log(parent.id);

console.log(elem4.closest('#elem4'));

console.log(elem5.closest('.www'));

const previousSibling = elem.previousSibling;
console.log(previousSibling);

elem6.previousElementSibling.append('!');

const nextSibling = elem.nextSibling;
console.log(nextSibling);

elem6.nextElementSibling.append('!');