const states = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);
const stations = {
  kone: new Set(['id', 'nv', 'ut']),
  ktwo: new Set(['wa', 'id', 'mt']),
  kthree: new Set(['or', 'nv', 'ca']),
  kfour: new Set(['nv', 'ut']),
  kfive: new Set(['ca', 'az']),
};

const result = [];
const coveredStates = new Set();

while (coveredStates.size !== states.size) {
  let bestStation;
  let bestUncoveredStatesAmount = 0;

  Object.keys(stations).forEach(station => {
    const stationsStates = stations[station];
    const uncoveredStatesAmount = stationsStates.difference(coveredStates);

    if (uncoveredStatesAmount.size > bestUncoveredStatesAmount) {
      bestUncoveredStatesAmount = uncoveredStatesAmount;
      bestStation = station;
    }
  });

  const bestStationStates = stations[bestStation];
  bestStationStates.forEach(state => coveredStates.add(state));
  result.push(bestStation);
}

console.log(result);