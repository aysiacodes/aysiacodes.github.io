const cache = {};

const query = document.getElementById("query");
const findBtn = document.getElementById("findBtn");
const addBtn = document.getElementById("addBtn");

const sprite = document.getElementById("sprite");
const cry = document.getElementById("cry");

const move1 = document.getElementById("move1");
const move2 = document.getElementById("move2");
const move3 = document.getElementById("move3");
const move4 = document.getElementById("move4");

const teamBody = document.getElementById("teamBody");

let currentPokemon = null;



function clearMoves(){
move1.innerHTML="";
move2.innerHTML="";
move3.innerHTML="";
move4.innerHTML="";
}



function populateMoves(moves){

clearMoves();

moves.forEach(move=>{

let m = move.move.name;

let option1 = document.createElement("option");
option1.textContent = m;

let option2 = option1.cloneNode(true);
let option3 = option1.cloneNode(true);
let option4 = option1.cloneNode(true);

move1.appendChild(option1);
move2.appendChild(option2);
move3.appendChild(option3);
move4.appendChild(option4);

});

}



async function findPokemon(){

let name = query.value.toLowerCase();

if(!name) return;

let data;

if(cache[name]){
data = cache[name];
}
else{

let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);

if(!response.ok){
alert("Pokemon not found");
return;
}

data = await response.json();

cache[name] = data;

}

currentPokemon = data;

sprite.src = data.sprites.front_default;

if(data.cries && data.cries.latest){
cry.src = data.cries.latest;
}

populateMoves(data.moves);

}



function addToTeam(){

if(!currentPokemon) return;

let moves = [
move1.value,
move2.value,
move3.value,
move4.value
];

let row = document.createElement("tr");

let imgCell = document.createElement("td");

let img = document.createElement("img");
img.src = currentPokemon.sprites.front_default;
img.className="team-sprite";

imgCell.appendChild(img);

let moveCell = document.createElement("td");

let list = document.createElement("ul");

moves.forEach(m=>{

let li = document.createElement("li");
li.textContent = m;

list.appendChild(li);

});

moveCell.appendChild(list);

row.appendChild(imgCell);
row.appendChild(moveCell);

teamBody.appendChild(row);

}



findBtn.addEventListener("click",findPokemon);

addBtn.addEventListener("click",addToTeam);