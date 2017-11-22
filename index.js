const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assign({}, driver, {[key]: value});
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newestDriver = Object.assign({}, driver);
  delete newestDriver[key];
  return newestDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
