var btns = document.querySelectorAll("button");
var textview = document.querySelector(".textview");
var p1TableBody = document.querySelector("#tableRow1");
var p2TableBody = document.querySelector("#tableRow2");
var p1CardsList = document.querySelectorAll(".p1Cards");
var p2CardsList = document.querySelectorAll(".p2Cards");

var p1cards = pickRandomNumber();
var p2cards = pickRandomNumber();
var isPlayer1Turn = true;
var p2Trial = 0;
var p1Trial = 0;
const p1 = new Player(p1cards);
const p2 = new Player(p2cards);
p1.printCards();
p2.printCards();

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function(event){
        var id = event.target.id;
        if(id === "clear" || id === "call"){
            if(id === "clear")
                textview.value = "";
            else{
                //guess function call(), if textview.value.length === 3
                let guess = textview.value;
                if(guess.length === 3){
                    guessNumber(guess);
                    textview.value = "";
                }
            } 
        }
        else{
            if(textview.value.length < 3)
                textview.value += id; 
        }
    });
}

function guessNumber(guess) {
    let eatsbites = "";
    if(isPlayer1Turn){
        eatsbites = p2.compareGuess(guess);
        p1Trial++;
    }
    else{
        eatsbites = p1.compareGuess(guess);
        p2Trial++;
    }
    if(eatsbites === "3 - 0"){
        terminateGame();
    }
    listEatsBites(eatsbites, guess);
    isPlayer1Turn = !isPlayer1Turn;
}

function listEatsBites(eatsbites, guess) {
    let pNumTrial = (isPlayer1Turn) ? p1Trial : p2Trial;
    // create tr
    var tr = document.createElement("tr");
    // create td1 = p#Trial, td2 = guess, td3 = eatsbites
    tr.innerHTML = "<td>" + pNumTrial + "</td>" +
                   "<td>" + guess + "</td>" +
                   "<td>" + eatsbites + "</td>";
    // tr appendChild of td in order
        // or maybe in innerHTML
    if(isPlayer1Turn){
        // append tr to p1TableBody
        p1TableBody.appendChild(tr);
    }
    else{
        // append tr to p2TableBody
        p2TableBody.appendChild(tr);
    }
}

function pickRandomNumber() {
    let nums = [];
    let isValid = 1;
    let random = 0;
    while(nums.length < 3){
        isValid = 1;
        random = Math.floor(Math.random()*10);
        for(let i=0; i<nums.length; i++){
            if(random == nums[i]){
                isValid = 0;
                break;
            }
        }
        if(isValid)
            nums.push(random);
    }
    let string = "";
    for(let i=0; i<nums.length; i++){
        string = string + nums[i];
    }
    return string;
}

function terminateGame() {
    // reveal cards for both player
    // change p1 innerHTML
    for(let i=0; i<p1CardsList.length; i++){
        p1CardsList[i].innerHTML = p1.getNthCardImg(i+1);
    }
    for(let i=0; i<p2CardsList.length; i++){
        p2CardsList[i].innerHTML = p2.getNthCardImg(i+1);
    }
}