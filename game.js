var BLOCK_SIZE = 20
var BLOCK_COUNT = 20

var gameInterval
var snack

function gameStart() {
  gameInterval = setInterval(gameRoutine, 1000)
}

function gameRoutine() {
  moveSnack()
  updateCanvas()
}

function moveSnack() {
  var newBlock = {
    x: snack.body[0].x + snack.direction.x,
    y: snack.body[0].y + snack.direction.y
  }

  snack.body.unshift(newBlock)

  while(snack.body.length > snack.size) {
    snack.body.pop()
  }
}



function updateCanvas() {
  var canvas = document.getElementById('canvas_id')
  var context = canvas.getContext('2d')

  context.fillStyle = 'black'
  context.fillRect(0, 0, canvas.width, canvas.height)
}