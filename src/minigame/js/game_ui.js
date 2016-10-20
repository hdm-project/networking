function drawGrid (context, grid) {
  var fullWidth, fullHeight, gridSize, tileSize, x, y;
  gridSize = {
    x: grid[0].length,
    y: grid.length
  };
  fullWidth = context.canvas.width;
  fullHeight = context.canvas.height;
  tileSize = {
    width: Math.round(fullWidth / gridSize.x),
    height: Math.round(fullHeight / gridSize.y),
  };
  context.clearRect(0, 0, fullWidth, fullHeight);


  for (x = 0; x < gridSize.x; x++) {
    for (y = 0; y < gridSize.y; y++) {
      drawTile({x: x * tileSize.width, y: y * tileSize.height}, grid[y][x])
    }
  }

  function drawTile (position, tile) {
    context.fillStyle = tile.backgroundColor.background;
    context.fillRect(position.x, position.y, tileSize.width, tileSize.height)
    context.font = "20px Arial";
    context.fillStyle = tile.fontColor.font;
    context.fillText(tile.text.name, position.x + 30, position.y + 30);
  }

}