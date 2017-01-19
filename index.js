var http = require('http');
var Accessory, Service, Characteristic, UUIDGen;

module.exports = function(homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  UUIDGen = homebridge.hap.uuid;

  homebridge.registerAccessory("homebridge-mi-robot-vacuum", "Mi Robot Vacuum", Robot);
}

function Robot(log, config, api) {
  log("Xiaomi Robot Vacuum Init");
  var platform = this;
  this.log = log;
  this.robotIP = config["robotIP"];
  this.start = config["start"];
  this.stop = config["stop"];
  this.returnToHome = config["returnToHome"];
}

Robot.prototype = {
  getPowerState: function(callback) {
    callback(null, false);
  },
  setPowerState: function(powerOn, callback) {
    if(powerOn) {
      this.log("start robo");
    } else {
      this.log("stop robo");
    }
    callback();
  },

  identify: function(callback) {
    this.log("Identify requested!");
    callback();
  },

  getServices: function() {
    var informationService = new Service.AccessoryInformation();

    informationService
      .setCharacteristic(Characteristic.Manufacturer, "tobiaslins")
      .setCharacteristic(Characteristic.Model, "Mi Robot Vacuum")
      .setCharacteristic(Characteristic.SerialNumber, "1234567890");

    switchService = new Service.Switch(this.name);
    switchService
      .getCharacteristic(Characteristic.On)
      .on('get', this.getPowerState.bind(this))
      .on('set', this.setPowerState.bind(this));


    return [switchService];
  }
};
