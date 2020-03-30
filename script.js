var numSquare =6;
var colors = generateColor(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

//mode button

for (var i = 0; i < modeBtn.length; i++) {
  modeBtn[i].addEventListener("click",function(){
    modeBtn[0].classList.remove("selected");
    modeBtn[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquare = 3 : numSquare = 6;
      reset();
  });
}

function reset(){
  //generate new color
  colors = generateColor(numSquare);
  //new color
  pickedColor =  pickColor();
  colorDisplay.textContent = pickedColor;
  resetBtn.textContent = "New Colors"
  messageDisplay.textContent = "";
  //change color
  for(var i=0;i < squares.length;i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

function easy(){

}
// //easy button
// easyBtn.addEventListener("click", function() {
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquare = 3;
//   colors = generateColor(3);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0;i<squares.length; i++)
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     }
//     else{
//       squares[i].style.display = "none";
//     }
// });
//
// //hard button
// hardBtn.addEventListener("click", function() {
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquare = 6;
//   colors = generateColor(numSquare);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0;i<squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// });

//new game buton  (reset)
resetBtn.addEventListener("click",function(){
  reset();
  //generate new color
  // colors = generateColor(numSquare);
  // //new color
  // pickedColor =  pickColor();
  // colorDisplay.textContent = pickedColor;
  // this.textContent = "New Game"
  // messageDisplay.textContent = "";
  // //change color
  // for(var i=0;i<squares.length;i++){
  //   squares[i].style.backgroundColor = colors[i];
  // }
  // h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

//main display funcrtion
for(var i = 0; i < squares.length; i++){
  //initial colors
  squares[i].style.backgroundColor = colors[i];
  //event listner
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
      resetBtn.textContent = "Play Again";
      h1.style.backgroundColor = clickedColor;
    }
    else{
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again";
    }
  });
}

//functions

function changeColors(color){
  //loop through all sqaures
  for(var i = 0;i<squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateColor(num){
  //make array
  var arr = [];
  //repeate n no of times
  for(var i=0;i<num;i++){
    //get random colors
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  //red
  var r = Math.floor(Math.random()*256);
  //green
  var g = Math.floor(Math.random()*256);
  //blue
  var b = Math.floor(Math.random()*256);
  return "rgb("+ r +", "+ g +", "+ b +")";
}
