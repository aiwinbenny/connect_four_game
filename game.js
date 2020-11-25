
var player1 = prompt("Player One enter your name")
var player2 = prompt("Player Two enter your name")
var turn =0
var table = $('table tr');
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

function returnColor(rowIndex,colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).css('background-color');
}

function winCheck() {

  for(var i=5;i>-1;i--)
  {
    for(var j=0;j<4;j++ )
    {
      if(returnColor(i,j) === returnColor(i,j+1) && returnColor(i,j) === returnColor(i,j+2) && returnColor(i,j) === returnColor(i,j+3) && returnColor(i,j) !== 'rgb(128, 128, 128)' &&  returnColor(i,j) !== undefined)
      {
        return true
      }
    }
  }

  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (returnColor(row,col) === returnColor(row+1,col) && returnColor(row,col) === returnColor(row+2,col) && returnColor(row,col) === returnColor(row+3,col) && returnColor(row,col) !== 'rgb(128, 128, 128)' &&  returnColor(row,col) !== undefined) {

        return true;
      }
    }
  }

  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if(returnColor(row,col) === returnColor(row+1,col+1) && returnColor(row,col) === returnColor(row+2,col+2) && returnColor(row,col) === returnColor(row+3,col+3) && returnColor(row,col) !== 'rgb(128, 128, 128)' &&  returnColor(row,col) !== undefined) {
        return true;
      }else if (returnColor(row,col) === returnColor(row-1,col+1) && returnColor(row,col) === returnColor(row-2,col+2) && returnColor(row,col) === returnColor(row-3,col+3) && returnColor(row,col) !== 'rgb(128, 128, 128)' &&  returnColor(row,col) !== undefined) {
        return true;
      }
    }
  }
}
$( document ).ready(function() {
    $('h2').text(player1 + " drop the red token by clicking the column")
});
// $('h1').text(Player1 + " select column to drop token")
// $(window).on('load', function(){
//     $(h2).text("hello")
// });
$('td').click(function (event) {
  if(turn%2 === 0 )
  {
    turnRed($(this).index())
  }
  else {
    turnBlue($(this).index())
  }
  if(turn%2===1)
  {
    $('h2').text(player1 + " drop the red token by clicking the column")
  }
  else {
    $('h2').text(player2 + " drop the blue token by clicking the column")
  }

  // console.log("hai");
  if(winCheck()){
      $('.container').fadeOut("3000")
      $('h3').text("Refresh to restart")
      if(turn%2 ===0)
      {
        $('h2').text(player1 + " won")
      }
      else{
        $('h2').text(player2 + " won")
      }
  }
  else{
    console.log("fail");
  }
  turn++;

})
