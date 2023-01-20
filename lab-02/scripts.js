let counter = 0;

function greetMe() {
    counter++;
    console.log("Hello!!!");
    console.log(counter);
}

function count() {
    if (counter == 1) {
        myTrigger.textContent = `Button clicked ${counter} time`;
    } else {
        myTrigger.textContent = `Button clicked ${counter} times`;
    }
}

myTrigger.addEventListener('click', greetMe);
myTrigger.addEventListener('click', count);