const h2 = document.createElement("h2")
h1.textContent = "art, life, home"

document.querySelector("body").appendChild(h2) 

const sinon = require(sinon)

function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
      alert('You signed up!')
    })
}
addingEventListener() 