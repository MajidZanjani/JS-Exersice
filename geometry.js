function trianglePerimeter(triangle) {
  function distance(p1, p2) {
    return Math.hypot(p2.x - p1.x, p2.y - p1.y);
  }

  return (
    distance(triangle.a, triangle.b) +
    distance(triangle.b, triangle.c) +
    distance(triangle.c, triangle.a)
  );
}

function Point(x, y) {
  this.x = x;
  this.y = y;
}

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

var myTri = new Triangle(
  new Point(10, 10),
  new Point(40, 10),
  new Point(10, 50)
);

console.log(trianglePerimeter(myTri));
