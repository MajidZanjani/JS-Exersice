function cakes(recipe, available) {
  let result = Infinity; // start with "max possible"

  for (let ingredient in recipe) {
    if (!available[ingredient]) {
      return 0; // missing ingredient -> no cake
    }
    let possible = Math.floor(available[ingredient] / recipe[ingredient]);
    result = Math.min(result, possible); // keep the limiting ingredient
  }

  return result;
}

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 500, sugar: 200, eggs: 1, milk: 200 };

console.log(cakes(recipe, available));
