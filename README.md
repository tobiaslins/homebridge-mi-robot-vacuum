# homebridge-mi-robot-vacuum
A homebridge plugin to control your xiaomi mi robot vacuum

## Receiving HEX values for Start/Stop and Return Command
More Details here: https://github.com/jghaanstra/com.robot.xiaomi-mi

## homebridge config

Add a new accessory to your `config.json`

```json
{
  "accessory": "MiVacuum",
  "name": "Vacuum Cleaner",
  "roboIP": "IPOFYOURROBOT",
  "start": "HEX_STREAM_FOR_START",
  "stop": "HEX_STREAM_FOR_STOP"
}
```
