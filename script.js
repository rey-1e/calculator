let keys = document.querySelector(".keys");
let key = document.querySelector(".key");
let screen = document.querySelector(".screen");

let statement = "";
key.addEventListener("click", (evt)=> {

    if(evt.target.innerText == "AC") {
        screen.innerText = "";
    } else if(evt.target.innerText == "C") {
        //remove last element from screen.innerText
        screen.innerText = '0';
    } else if(evt.target.innerText == "=") {
        //call a function which returns the value;
    }

    //check for symbols; 
    if(isSymbol(evt.target.innerText)) {
        
        symbol = evt.target.innerText;
    }

    //take expression number; 
    statement += evt.target.innerText;


});

function isSymbol(El) {
    return (El == '%' || El == '/' || El == '*' || El == '-' || El == '+' || El == '.');
}
