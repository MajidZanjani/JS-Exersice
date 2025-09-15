function formatPhoneNumberInput(input) {
  // Keep only digits, max 10
  const digits = input.replace(/\D/g, "").slice(0, 10);

  // Handle bare "(" case explicitly
  if (input.trim() === "(" && digits.length === 0) {
    return "(";
  }

  // Build progressively
  return digits.replace(
    /^(\d{0,3})(\d{0,3})(\d{0,4})/,
    (_, p1, p2, p3) => {
        console.log(digits, '..', p1, '..', p2, '..', p3);
      let out = "";
      if (p1) out = "(" + p1;

      if (p2) {
          out += ") " + p2;
      }

      if (p3) {
          out += "-" + p3;
      } else if (p2.length === 3 && /-$/.test(input)) {
        // preserve user-supplied "-"
        out += "-";
      }

      return out;
    }
  );
}


var input = '12sdfg563xvvv----3456';
console.log(formatPhoneNumberInput(input));
