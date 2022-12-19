// Code your solution here
// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
function findMatching(array, str) {
  //return all drivers with str in name
  const result = array.filter(name => name.toUpperCase() === str.toUpperCase())
  return result
}
// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(array, str) {
  const result = array.filter(name => {
    return name.startsWith(str)
  })
  return result
}
// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
function matchName(arr, str) {
  const result = arr.filter( obj => {
    return (obj.name === str)
  })

  return result
}