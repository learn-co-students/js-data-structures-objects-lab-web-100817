// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  const driverObj = {...driver};
  driverObj[key] = value;
  return driverObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const NewObj = Object.assign({},driver)
  delete NewObj[key]
  return NewObj
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
