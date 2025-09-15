function validateBattlefield(field) {
  // write your magic here
  const shipsNeeded = { 1: 4, 2: 3, 3: 2, 4: 1 };

  const visited = Array.from({ length: 10 }, () => Array(10).fill(false));

  const inBounds = (x, y) => x >= 0 && y >= 0 && x < 10 && y < 10;

  function hasNeighbour(x, y) {
    const dirs = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    for (let [dx, dy] of dirs) {
      const nx = x + dx,
        ny = y + dy;
      if (inBounds(nx, ny) && field[nx][ny] === 1 && !visited[nx][ny]) {
        return true;
      }
    }
    return false;
  }

  function exploreShip(x, y) {
    let cells = [[x, y]];
    visited[x][y] = true;

    // check orientation
    let dx = 0,
      dy = 0;
    if (inBounds(x + 1, y) && field[x + 1][y] === 1) dx = 1;
    if (inBounds(x, y + 1) && field[x][y + 1] === 1) dy = 1;

    // collect ship cells
    let nx = x + dx,
      ny = y + dy;
    while (inBounds(nx, ny) && field[nx][ny] === 1 && !visited[nx][ny]) {
      visited[nx][ny] = true;
      cells.push([nx, ny]);
      nx += dx;
      ny += dy;
    }

    // if ship bends → invalid
    if (dx && dy) return null;

    for (let [cx, cy] of cells) {
      if (hasNeighbour(cx, cy)) return null;
    }

    return cells.length;
  }

  const foundShips = { 1: 0, 2: 0, 3: 0, 4: 0 };

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (field[i][j] === 1 && !visited[i][j]) {
        const size = exploreShip(i, j);
        if (!size || size > 4) return false;
        foundShips[size]++;
      }
    }
  }

  for (let size = 1; size <= 4; size++) {
    if (foundShips[size] !== shipsNeeded[size]) return false;
  }

  return true;
}

console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);
