# homebridge-mi-robot-vacuum
[![NPM version][npm-image]][npm-url]

A homebridge plugin to control your xiaomi mi robot vacuum

**NOTE** To configure this plugin - you need to install [_Wireshark_](https://www.wireshark.org/) and [_Bluestacks_](http://www.bluestacks.com/de/index.html)

## Installation

```
npm install -g homebridge-mi-robot-vacuum
```

## Receiving HEX values for configuration
More Details here: https://github.com/jghaanstra/com.robot.xiaomi-mi

## homebridge configuration

Add a new accessory to your `config.json`

`robotIP` is the IP address of your mi robot vacuum in your internal network

`start` is the HEX stream for starting the robot

`stop` is the HEX stream for starting the robot

```json
{
  "accessory": "MiVacuum",
  "name": "Vacuum Cleaner",
  "robotIP": "IP_ADDRESS_ROBOT",
  "start": "HEX_STREAM_FOR_START",
  "stop": "HEX_STREAM_FOR_STOP"
}
```

[npm-url]: https://www.npmjs.com/package/homebridge-mi-robot-vacuum
[npm-image]: http://img.shields.io/npm/v/homebridge-mi-robot-vacuum.svg
