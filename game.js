
var player1 = prompt("Player One enter your name")
var player2 = prompt("Player Two enter your name")
var turn =0
function turnRed(index) {
  var bg = "rgb(128, 128, 128)"
  var flag = false
  while(bg === String($('td').eq(index).css("background-color"))  )
  {
    if(index<=34)
    {
      index=index+7;
    }
    else {
      flag = true
      break
    }

  }
  if(flag)
  {
    $('td').eq(index).css("background-color",'red')
  }
  else {
    $('td').eq(index-7).css("background-color",'red')
  }




}
function turnBlue(index) {
  var bg = "rgb(128, 128, 128)"
  var flag = false
  while(bg === String($('td').eq(index).css("background-color"))  )
  {
    if(index<=34)
    {
      index=index+7;
    }
    else {
      flag = true
      break
    }

  }
  if(flag)
  {
    $('td').eq(index).css("background-color",'blue')
  }
  else {
    $('td').eq(index-7).css("background-color",'blue')
  }

}

function winCheckRed() {

}

function winCheckBlue() {


}

$('td').click(function (event) {
  if(turn%2 === 0 )
  {
    turnRed($(this).index())
    winCheckRed()
  }
  else {
    turnBlue($(this).index())
    winCheckBlue()
  }
  turn++;



})
