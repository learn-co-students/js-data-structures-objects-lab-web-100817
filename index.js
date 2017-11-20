// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
    let newDriver = Object.assign({}, obj)
    newDriver[key] = value
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver;
}
 function deleteFromDriverByKey(obj, key) {
   let newDriver = Object.assign({}, obj);
   delete newDriver[key]
   return newDriver;
 }

 function destructivelyDeleteFromDriverByKey(driver, key) {
   delete driver[key]
   return driver
}
