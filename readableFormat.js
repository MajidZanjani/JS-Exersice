function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const units = [
    { label: "year", value: 365 * 24 * 60 * 60 },
    { label: "day", value: 24 * 60 * 60 },
    { label: "hour", value: 60 * 60 },
    { label: "minute", value: 60 },
    { label: "second", value: 1 },
  ];

  const parts = [];

  for (let unit of units) {
    const count = Math.floor(seconds / unit.value);
    if (count > 0) {
      parts.push(count + " " + unit.label + (count > 1 ? "s" : ""));
      seconds %= unit.value;
    }
  }

  if (parts.length === 1) return parts[0];

  return parts.slice(0, -1).join(", ") + " and " + parts.slice(-1);
}

var seconds = 365 * 24 * 60 * 60 + 3600 + 2;
console.log(formatDuration(seconds));

var seconds = 365 * 24 * 60 * 60;
console.log(formatDuration(seconds));

var seconds = 86687901;
console.log(formatDuration(seconds));
