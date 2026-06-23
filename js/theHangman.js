//================================================ getting Elements fro html

const category = document.getElementById("category");
const dashContainer = document.getElementById("dash-container");
const keyboard = document.getElementById("keyboard");

//================================================ Initializing Varaibles

const words = [
  {
    id: 1,
    category: "Fruit",
    items: ["MANGO", "ORANGE", "APPLE", "Peach"],
  },
  {
    id: 2,
    category: "Vegitable",
    items: ["CARROT", "POTATO", "TOMATO", "PEA"],
  },
];

//================================================ Functions

const generateRandomNum = (range) => Math.floor(Math.random() * range);

const randomCategory = words[generateRandomNum(words.length)];

const randomWord =
  randomCategory.items[generateRandomNum(randomCategory.items.length)];

  console.log(randomWord);

category.innerHTML = `The item is a ${randomCategory.category}`;

for (let i = 0; i < randomWord.length; i++) {
  dashContainer.appendChild(document.createElement("div"));
}

for (let i = 65; i <= 90; i++) {
let tempBtn = document.createElement("button");
  tempBtn.innerHTML = `&#${i}`;

  tempBtn.addEventListener("click", () => {
   checkLetter(String.fromCharCode(i)) 
   tempBtn.setAttribute("disabled",true)
  });
  keyboard.appendChild(tempBtn);



// keyboard.innerHTML += `
//  <button onclick="checkLetter(${i})">&#${i}</button>
// `

}

const checkLetter = (letter) => {
 // letter = String.fromCharCode(letter)
  if (randomWord.includes(letter)) {
    for (let i = 0; i<randomWord.length; i++) {
      if (randomWord[i] == letter) {
        dashContainer.children[i].innerHTML = letter
      }
    }
  }
};


