var gameInterval

function gameStart() {
  gameInterval = setInterval(gameRoutine, 1000)
}

function gameRoutine() {
  updateCanvas()
}

function updateCanvas() {
  var canvas = document.getElementById('canvas_id')
  var context = canvas.getContext('2d')

  context.fillStyle = 'black'
  context.fillRect(0, 0, canvas.width, canvas.height)
}