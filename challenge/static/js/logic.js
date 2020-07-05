//challenge 1


function ageinDays(){
    var year = prompt('Enter your year of birth..');
    var calc = (2020 - year) * 365;
    var h1 = document.createElement('h1');
    var text = document.createTextNode('you are '+calc+' days old');
    h1.setAttribute('id','ageinDays');
    h1.appendChild(text);
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
    document.getElementById('ageinDays').remove();
}


//challenge 2
function generate(){
    var pic = document.createElement('img');
    var div = document.getElementById('box');
    pic.src = "D:/Web/js/challenge/static/img/paper.jpg";
    div.appendChild(pic);

}


//challenge 3
function rps(yourChoice){
    console.log(yourChoice.src);//obj.src,obj.id=object.attribute goes well
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numbertoChoice(random());
    console.log(botChoice);
    //alert(botChoice);
    results = decide(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);//returns dictionary{'message':'', color:''}
    console.log(message);
    rpsFrontend(yourChoice.id, botChoice, message);

}

function random(){
    return Math.floor(Math.random()*3);
}

function numbertoChoice(number){
    return ['rock', 'paper', 'scissor'][number];
}

function decide(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {"scissor" : 1, "paper" : 0, "rock": 0.5},
        'paper':{'rock' : 1, "paper" : 0.5, "scissor": 0},
        'scissor':{'rock' : 0, "paper" : 1, "scissor": 0.5},
        
    }   
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return {'message': 'You Lost!', 'color' : 'red'};
    }else if(yourScore === 0.5){
        return {'message':'Your tied!', 'color':'yellow'};
    }else{
        return{'message':'You won!', 'color':'green'};
    }
}

function rpsFrontend(himgChoice,bimgChoice, finalMessage){
    var imagesDatabase = {
        "rock": document.getElementById('rock').src,
        "paper": document.getElementById('paper').src,
        "scissor": document.getElementById('scissor').src
    }

    //remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[himgChoice] +"' height = 150 width=150 style='box-shadow: 0px 18px 54px  rgb(15, 28, 163);'>"
    messageDiv.innerHTML ="<h1 style='color: " + finalMessage['color']+";font-size : 60px; padding: 30px; '>" +finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[bimgChoice] +"' height = 150 width=150 style='box-shadow: 0px 18px 54px  rgb(243, 38, 44);'>"
    
    document.getElementById('flex-container-3').appendChild(humanDiv);
    document.getElementById('flex-container-3').appendChild(messageDiv);
    document.getElementById('flex-container-3').appendChild(botDiv);
}


//challenge 4:

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i=0; i< all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);


function btnColorChange(btnthing){
    if(btnthing.value === "Red"){
        buttonRed();
    }else if(btnthing.value === "Blue"){
        buttonBlue();
    }else if(btnthing.value === "Reset"){
        buttonReset();
    }
    else if(btnthing.value === "Random"){
        randomColor();
    }
}
function buttonRed() {
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonBlue() {
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}

function buttonReset() {
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColor() {
    var choices = ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger'];

    for (let i =0 ; i<all_buttons.length; i++){
        var randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}
