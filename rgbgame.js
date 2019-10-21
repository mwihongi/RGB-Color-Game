
function changedColor(color){
    for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = color
    }
}

function pickColor(){
   var random =  Math.floor(Math.random() * colors.length)
   return colors [random];
}


function randomColor(){
    var r = Math.floor(Math.random() *256);
    var g = Math.floor(Math.random() *256);
    var b = Math.floor(Math.random() *256);
    return "rgb("+ r + ", " + g + ", " + b + ")";
}


function generateRandomColors(num){
var arr = [];
for(var i=0; i < num; i++) {
    arr.push(randomColor())
}
    return arr;
;
}

function reset(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    messageDisplay.textContent= "";
    resetButton.textContent= "New Colors";
    colorDisplay.textContent = pickedColor;
    for (var i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
        squares[i].style.background= colors[i];}
        else{
            squares[i].style.display= "none";
        }
    }
    h1.style.backgroundColor= "steelblue";
}


// easyBtn.addEventListener("click", function(){
//    hardBtn.classList.remove("selected");
//    easyBtn.classList.add("selected");
//    numberOfSquares= 3;
//    colors = generateRandomColors(numberOfSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent= pickedColor;
//    for(var i = 0; i < squares.length; i++){
//        if(colors[i]){
//            squares[i].style.backgroundColor = colors[i];
//        }
//        else{
//            squares[i].style.display = "none"
//        }
//    }
// })

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numberOfSquares= 6;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent= pickedColor;
//     for(var i = 0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//         }
//     }
//  );




var numberOfSquares= 6;
var colors = generateRandomColors(numberOfSquares)
console.log(colors)
var squares = document.getElementsByClassName("square");
console.log(squares)
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
colorDisplay.textContent = pickedColor;
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");





for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
     modeButtons[0].classList.remove("selected")
     modeButtons[1].classList.remove("selected")
     this.classList.add("selected");   
     if(this.textContent === "Easy"){
         numberOfSquares = 3;
     }
     else{
         numberOfSquares = 6;
     }
     reset();


    })
}


resetButton.addEventListener('click', function(){
    reset();
    for (var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor= colors[i];
    }
    h1.style.backgroundColor= "#steelblue"
})


for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i]
    console.log(colors[i])
    squares[i].addEventListener("click", function(){
       var clickedColor= this.style.backgroundColor;
        console.log(clickedColor);
       if (clickedColor === pickedColor){
           messageDisplay.textContent = "Correct";
           resetButton.textContent= "play Again";
            changedColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            for(i=0; i<squares.length; i++){
             squares[i].stlye.backgroundColor= clickedColor;
            }

        }
           else{ 
               this.style.backgroundColor = "#232323";
               messageDisplay.textContent = "Try Again";
            }
  
  
  
        });

};

