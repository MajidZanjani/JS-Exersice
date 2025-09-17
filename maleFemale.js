function inviteMoreWomen(L) {
  //coding and coding..
  var result = L.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  var invite = result <= 0 ? false : true;

  return invite;
}

var L = [-1, -1, -1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1];

console.log(inviteMoreWomen(L));
