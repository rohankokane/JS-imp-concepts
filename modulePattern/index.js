class CarModule {
  mileage = 0; // public variable
  #co2Emission = 0; //private variable
  constructor() {
    this.milesDriven = 0;
    this.topSpeed = 0;
  }
  getTopSpeed() {
    return this.topSpeed;
  }
}

const TruckModule = function () {
  let milesDriven = 0; //private variables
  let capacity = 0;

  const addMilesDriven = (amount) => {
    milesDriven += amount;
  };
  const getMilesDriven = () => milesDriven;

  const setCapacity = (amount) => {
    capacity = amount;
  };
  const getCapacity = () => capacity;

  //revealed API ->
  return {
    addMilesDriven,
    getMilesDriven,
    setCapacity,
    getCapacity
  };
};
