const containerEl = document.querySelector(".container")
const carrer = ["You tube","Web Developer","Freelancer","Instructor"]
let carrerIndex = 0
let characterIndex = 0
updateText()

function updateText() {
    characterIndex++
  containerEl.innerHTML = `<h1> i am a ${carrer[carrerIndex].slice(0,characterIndex)} </h1>`  
  
  if (characterIndex === carrer[carrerIndex].length) {
    carrerIndex++
    characterIndex = 0
}

  if(carrerIndex === carrer.length){
    carrerIndex = 0
  }
  setTimeout(updateText, 200)
}


