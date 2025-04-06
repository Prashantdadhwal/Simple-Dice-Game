function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomImage = "dice" + randomNumber + ".png";
    var randomImageSource = "images/" + randomImage;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage2 = "dice" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", "images/" + randomImage2);

    if (randomNumber > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!!!";
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelectorAll("p").forEach(function (p) {
            p.style.color = "black";
        });
        document.getElementById("rollDiceButton").style.display = "none";
    } else if (randomNumber < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!!!";
        document.querySelector("body").style.backgroundColor = "blue";
        document.querySelectorAll("p").forEach(function (p) {
            p.style.color = "black";
        });
        document.getElementById("rollDiceButton").style.display = "none";
    } else {
        document.querySelector("h1").innerHTML = "Draw!!!";
        document.querySelector("body").style.backgroundColor = "#393E46";
        document.querySelector("button").innerHTML="Click Again";
        document.querySelectorAll("p").forEach(function (p) {
            p.style.color = "#EEEEEE";
        });
    }
}

document.getElementById("rollDiceButton").addEventListener("click", rollDice);






// var randomNumber=Math.floor(Math.random()*6)+1;
// var randomeImage="dice"+randomNumber+".png";
// var randomImageSource="images/"+randomeImage;
// var image1=document.querySelectorAll("img")[0];
// image1.setAttribute("src",randomImageSource);

// var randomNumber2=Math.floor(Math.random()*6)+1;
// var randomeImage2="images/dice"+randomNumber2+".png";
// var image2=document.querySelectorAll("img")[1];
// image2.setAttribute("src",randomeImage2);

// // if(randomNumber>randomNumber2)
// // {
// //     document.querySelector("h1").innerHTML="Player 1 wins!!!";
    
// //     document.querySelector("h1").style.color="red";
// // }
// // else if(randomNumber<randomNumber2)
// //     {
// //         document.querySelector("h1").innerHTML="Player 2 wins!!!";
// //         document.querySelector("h1").style.color="blue";
// // }
// // else{
// //     document.querySelector("h1").innerHTML="Draw!!! refresh again";
// // }


// if(randomNumber>randomNumber2)
// {
//         document.querySelector("h1").innerHTML="Player 1 wins!!!";
//         document.querySelector("body").style.backgroundColor="red";
//         document.querySelectorAll("p").forEach(function(p) {
//             p.style.color = "black";
//         });
// }
// else if(randomNumber<randomNumber2)
// {
//             document.querySelector("h1").innerHTML="Player 2 wins!!!";
//             document.querySelector("body").style.backgroundColor="blue";
//             document.querySelectorAll("p").forEach(function(p) {
//                 p.style.color = "black";
//             });
// }
// else{
//         document.querySelector("h1").innerHTML="Draw!!! refresh again";
// // 