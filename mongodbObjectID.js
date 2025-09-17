const Mongo = {
  isValid: function (id) {
    return (
      typeof id === "string" && /^[0-9a-f]{24}$/.test(id) // exactly 24 hex chars
    );
  },

  getTimestamp: function (id) {
    if (!this.isValid(id)) return false;

    // First 8 chars = 4 bytes = Unix timestamp (in seconds)
    const timestampHex = id.slice(0, 8);
    const timestampSeconds = parseInt(timestampHex, 16);

    // Convert to Date (JS expects ms, so multiply by 1000)
    return new Date(timestampSeconds * 1000);
  },
};

console.log(Mongo.isValid("507f1f77bcf86cd799439011")); // true
console.log(Mongo.isValid("507f1f77bcf86cz799439011")); // false
console.log(Mongo.isValid("507f1f77bcf86cd79943901")); // false
console.log(Mongo.isValid("111111111111111111111111")); // true
console.log(Mongo.isValid(111111111111111111111111)); // false
console.log(Mongo.isValid("507f1f77bcf86cD799439011")); // false (we arbitrarily only allow lowercase letters)

console.log(Mongo.getTimestamp("507f1f77bcf86cd799439011")); // Wed Oct 17 2012 21:13:27 GMT-0700 (Pacific Daylight Time)
console.log(Mongo.getTimestamp("507f1f77bcf86cz799439011")); // false
console.log(Mongo.getTimestamp("507f1f77bcf86cd79943901")); // false
console.log(Mongo.getTimestamp("111111111111111111111111")); // Sun Jan 28 1979 00:25:53 GMT-0800 (Pacific Standard Time)
console.log(Mongo.getTimestamp(111111111111111111111111)); // false
