// alert("Hello!");
console.log(myElement);
myElement.textContent = "I've changed this!";

document.getElementById(`theButton`);
console.log(theButton);

let count = 0;

function change() {
    count++;
    theButton.textContent = `Clicked ${count} times!`;
}

document.getElementById(`theButton`).addEventListener("click", change);