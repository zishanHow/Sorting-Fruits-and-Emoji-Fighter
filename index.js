/* 
=========================================================================
                        Section one JavaScript
=========================================================================
*/
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let isFruitsSorting = false;  // condition logic
let emptyFruits = ""

/* 
=======================================================
function for separating or divide [apples, and oranges]
=======================================================
*/
function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}
/* 
====================================
    button for divide the fruits
====================================
*/
function sortingFruit() {
    if (isFruitsSorting === false) {
        sortFruit()
        isFruitsSorting = true
    } else {
        appleShelf.textContent = emptyFruits
        orangeShelf.textContent = emptyFruits
        isFruitsSorting = false
    }
}



/* 
=========================================================================
                        Section two JavaScript
=========================================================================
*/
let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function () {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomIndexOne = Math.floor(Math.random() * fighters.length)
    let randomIndexTwo = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
})
