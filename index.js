// Write your solution in this file!
const driver = {
  name: 'Sam'
};

function updateDriverWithKeyAndValue(driver, key, value) {
newDriver = {...driver};
newDriver[key] = value;
return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
driver[key] = value;
return driver;
}

function deleteFromDriverByKey(driver,key){
  newDriver = {...driver};
  delete newDriver[key];
  return newDriver;
}


function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key];
  return driver;
}
