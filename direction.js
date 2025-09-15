function direReduc(arr) {
  // function check(a, b) {
  //   if (
  //     (a == "NORTH" && b == "SOUTH") ||
  //     (b == "NORTH" && a == "SOUTH") ||
  //     (a == "EAST" && b == "WEST") ||
  //     (b == "EAST" && a == "WEST")
  //   )
  //     return true;
  //   else return false;
  // }

  // for (let i = 0; i < arr.length - 1; i++) {
  //   if (check(arr[i], arr[i + 1])) {
  //     arr.splice(i, 2);
  //     i = -1;
  //   }
  // }

  // return arr;

  var opposite = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };
  return arr.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}

console.log(
  direReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
console.log(direReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
console.log(direReduc(["NORTH", "WEST", "SOUTH", "EEST"]));
