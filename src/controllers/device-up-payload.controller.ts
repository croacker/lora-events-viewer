// Uncomment these imports to begin using these cool features!
import {RestBindings, get, ResponseObject, param} from '@loopback/rest';
import {inject} from '@loopback/context';
import {Request} from 'express';
import {DeviceUpPayload} from '../models';
// import {inject} from '@loopback/context';

const PING_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          greeting: { type: 'string' },
          date: { type: 'string' },
          url: { type: 'string' },
          headers: {
            type: 'object',
            properties: {
              'Content-Type': { type: 'string' },
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

export class DeviceUpPayloadController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) { }

  @get('/device-up-payload/from-hex/{hexStr}', {
    responses: {
      '200': PING_RESPONSE,
    },
  })
  async fromHex(
    @param.path.string('hexStr') hexStr: string
    ): Promise<object> {

    hexStr = hexStr || "0c27021e1a57025bb613034226690364a1ef635df7826da64fa24e988024bc5b71e0893e97fcd60c20bbb300900b00000000";
    const buf = Buffer.from(hexStr, "hex");
    console.log(hexStr);
    console.log(buf);

    return this.bufferToModel(buf);
  }

  @get('/device-up-payload/from-base64/{base64Str}', {
    responses: {
      '200': PING_RESPONSE,
    },
  })
  async fromBase64(
    @param.path.string('base64Str') base64Str: string
  ): Promise<object> {

    const buf = Buffer.from(base64Str, "base64");
    console.log(base64Str);
    console.log(buf);

    return this.bufferToModel(buf);
  }


  bufferToModel(buf: Buffer){
    let part = buf.slice(0, 1).reverse()
    let hex = this.toHex(part as Buffer)
    const protocolVersion = parseInt(hex, 16) / 10
    console.log(`protocolVersion = ${protocolVersion}`);

    part = buf.slice(1, 3).reverse()
    hex = this.toHex(part as Buffer)
    const commandId = hex
    console.log(`commandId = ${commandId}`);

    part = buf.slice(3, 7).reverse()
    hex = this.toHex(part as Buffer)
    const longitude = parseInt(hex, 16) * 0.000001
    console.log(`longitude = ${longitude}`);

    part = buf.slice(7, 11).reverse()
    hex = this.toHex(part as Buffer)
    const latitude = parseInt(hex, 16) * 0.000001
    console.log(`latitude = ${latitude}`);

    part = buf.slice(11, 12).reverse()
    hex = this.toHex(part as Buffer)
    const gpsFixStatus = parseInt(hex, 16) / 32
    console.log(`gpsFixStatus = ${gpsFixStatus}`);

    part = buf.slice(12, 13).reverse()
    hex = this.toHex(part as Buffer)
    const reserve = hex
    console.log(`reserve = ${reserve}`);

    part = buf.slice(13, 15).reverse()
    hex = this.toHex(part as Buffer)
    const calorie = parseInt(hex, 16)
    console.log(`calorie = ${calorie}`);

    part = buf.slice(15, 16).reverse()
    hex = this.toHex(part as Buffer)
    const batteryCapacity = parseInt(hex, 16)
    console.log(`batteryCapacity = ${batteryCapacity}`);

    part = buf.slice(16, 20).reverse()
    hex = this.toHex(part as Buffer)
    const dateTime = parseInt(hex, 16)
    console.log(`dateTime = ${dateTime}`);

    part = buf.slice(20, 40).reverse()
    hex = this.toHex(part as Buffer)
    const beaconId = hex
    console.log(`beaconId = ${beaconId}`);

    part = buf.slice(40, 41).reverse()
    hex = this.toHex(part as Buffer)
    const beaconType = parseInt(hex, 16) / 32
    console.log(`beaconType = ${beaconType}`);

    part = buf.slice(41, 42).reverse()
    hex = this.toHex(part as Buffer)
    const rssi = hex
    console.log(`rssi = ${rssi}`);

    part = buf.slice(42, 43).reverse()
    hex = this.toHex(part as Buffer)
    const txPower = parseInt(hex, 16)
    console.log(`txPower = ${txPower}`);

    part = buf.slice(43, 44).reverse()
    hex = this.toHex(part as Buffer)
    const heartRate = parseInt(hex, 16)
    console.log(`heartRate = ${heartRate}`);

    part = buf.slice(44, 46).reverse()
    hex = this.toHex(part as Buffer)
    const temperature = parseInt(hex, 16) / 100
    console.log(`temperature = ${temperature}`);

    part = buf.slice(46, 48).reverse()
    hex = this.toHex(part as Buffer)
    const step = parseInt(hex, 16)
    console.log(`step = ${step}`);

    part = buf.slice(48, 50).reverse()
    hex = this.toHex(part as Buffer)
    const distance = parseInt(hex, 16)
    console.log(`distance = ${distance}`);

    const deviceUpPayload = new DeviceUpPayload()
    deviceUpPayload.protocolVersion = protocolVersion
    deviceUpPayload.commandId = commandId
    deviceUpPayload.longitude = longitude
    deviceUpPayload.latitude = latitude
    deviceUpPayload.gpsFixStatus = gpsFixStatus
    deviceUpPayload.reserve = reserve
    deviceUpPayload.calorie = calorie
    deviceUpPayload.batteryCapacity = batteryCapacity
    deviceUpPayload.dateTime = dateTime
    deviceUpPayload.beaconId = beaconId
    deviceUpPayload.beaconType = beaconType
    deviceUpPayload.rssi = rssi
    deviceUpPayload.txPower = txPower
    deviceUpPayload.heartRate = heartRate
    deviceUpPayload.temperature = temperature
    deviceUpPayload.step = step
    deviceUpPayload.distance = distance

    return deviceUpPayload;
  }

  toHex(buf: Buffer):string {
    return buf.toString('hex')
  }

}
