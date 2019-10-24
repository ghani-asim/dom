'use strict';
const main = document.querySelector('main');

const article = document.createElement('article');

const image = document.createElement('img');
image.src = 'http://placekitten.com/320/162';
image.alt = 'title';

const figCapt = document.createElement('figcaption');
figCapt.innerHTML = 'Some other cat';

const fig = document.createElement('figure');
fig.appendChild(image);
fig.appendChild(figCapt);

const h2 = document.createElement('h2');
h2.innerHTML = `Script article header`;

const header = document.createElement('header');
header.appendChild(h2);

const p = document.createElement('p');
p.innerHTML = 'Here is some text. Here is some text. Here is some text. Here is some text.';

article.appendChild(header);
article.appendChild(fig);
article.appendChild(p);

main.appendChild(article);







