
function sayHello() {
    var myName = prompt("Введи своє імя?");
    if (myName === "") {
        myName = 'Хтось'
    }

    alert("Привіт " + myName)
}
