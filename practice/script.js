const contentDiv = document.querySelector('#container');

const pRed = document.createElement('p');
pRed.textContent = "Hey I'm red!";
pRed.style.color = "red";
contentDiv.appendChild(pRed);

const h3Blue = document.createElement('h3');
h3Blue.textContent = "I'm a blue h3!";
h3Blue.style.color = "blue";
contentDiv.appendChild(h3Blue);

const blackPinkDiv = document.createElement('div');
blackPinkDiv.style.backgroundColor = "pink";
blackPinkDiv.style.borderColor = "black";

const h1Inner = document.createElement('h1');
h1Inner.textContent = "I'm in a div";

const pInner = document.createElement('p');
pInner.textContent = "ME TOO!";

blackPinkDiv.appendChild(h1Inner);
blackPinkDiv.appendChild(pInner);

contentDiv.appendChild(blackPinkDiv);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("hello, world");

const betterBtn = document.querySelector('#betterBtn');
betterBtn.addEventListener('click', () => {
    alert("hello, world");
});
