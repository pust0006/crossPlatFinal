// Below is the use of all 8 concepts required, neatly labelled and fully functional.
var yolo = document.getElementById('a'); //dom and variable
var yol2 = document.getElementById('b'); //dom and variable
yolo.addEventListener('click', function() {window.open('https://media1.giphy.com/media/1OqGkv3Py3rzO/giphy.gif')}); //event
yol2.addEventListener('click', function() {forloop()}); //event
function forloop(c){ //function
    let alertStatement = { // Objects and Arrays (no use for arrays here)
        bad: 'try again',
        good: 'the end'
    }
    var person = prompt('enter a number between 0-100'); //variable
    if ((person < 100) || Number.isInteger(person)) { //validation and if/ logical condition
        document.getElementById('c').innerHTML = "say it " + person +" times!: "; //dom and variable
        for (var i = 1; i < person; i++) { //loop
            document.getElementById('c').innerHTML += "you've stumbled upon my loop "; //dom 
        }
        alert(`${alertStatement.good}`) // Objects and Arrays
    }
    else{  //  if/ logical statement
        alert(`${alertStatement.bad}`) // Objects and Arrays (no use for arrays here)
    }
}

