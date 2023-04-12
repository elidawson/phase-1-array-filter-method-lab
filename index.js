function findMatching(drivers, string) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === string.toLowerCase()
  );
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
  );
}

function matchName(drivers, string) {
  return drivers.filter(record => record.name === string);
}
