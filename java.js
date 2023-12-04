const date = new Date();
let fullYear = date.getFullYear();
document.getElementById("date").innerHTML = fullYear;
let buttonElement = document.getElementById('btn-alert');
buttonElement.onclick = () => {
    alert("Goodmorning Starshine!🌞The Earth Says HELLO!🌎")
}

buttonElement.onmouseover = () => {
    buttonElement.innerText = "Say Hi"
}
buttonElement.onmouseleave = () => {
    buttonElement.innerText = "Click"
}
let count = 1;
document.getElementById('btn-counter').classList.add('odd');
document.getElementById('btn-counter').onclick = () => {
    count++;
    if (count % 2 == 0) {
        document.getElementById('btn-counter').classList.remove('odd');
        document.getElementById('btn-counter').classList.add('even');
    }
    else {
        document.getElementById('btn-counter').classList.remove('even');
        document.getElementById('btn-counter').classList.add('odd');
    }

    document.getElementById('number').innerText = count;

}
for (let i = 1; i <= 100; i++) {
    let newLi = document.createElement("li");
    if (i % 2 == 0) {
        newLi.innerText = "even";
    }
    else {
        newLi.innerText = "odd";
    }

    document.getElementById('numbers').appendChild(newLi);
}