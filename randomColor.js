function randonColor(){
var arr =[]

//rgb由三組隨機數產生， i<3 重複三遍
for (var i=0; i<3; i++){
  arr.push(randomNum(0,255))
}
  
  var color = 'rgb('+arr.join()+')'
  
  return color
  
}

var color = randomColor()

document.body.style.backgroundColor = color
