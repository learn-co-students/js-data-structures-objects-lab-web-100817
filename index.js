// Write your solution in this file!
const driver = {}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) { driver[key] = value;
  return driver;
}

function updateDriverWithKeyAndValue(driver, key, value) { const newDriver = { ...driver};
  newDriver[key] = value;

  return newDriver;
}

function deleteFromDriverByKey(driver, key) {
  delete Object.keys(driver);
  return Object.keys(driver);
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver; 

}
