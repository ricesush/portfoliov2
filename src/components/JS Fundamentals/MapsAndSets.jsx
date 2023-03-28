export function MapsAndSets() {
  // defining a map object
  const testMap = new Map();
  // setting its value
  testMap.set('anyKey', 'anyValue');
  // knowing the size, size is the only attribute the Map() has
  testMap.size;
  // returns boolean if a key exists or not in a Map
  testMap.has('anyKey');
  // delete the Map element
  testMap.delete('anyKey');
  // this clears the Map object
  testMap.clear();
  //

  return <div></div>;
}
