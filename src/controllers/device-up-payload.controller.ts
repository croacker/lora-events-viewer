// Uncomment these imports to begin using these cool features!
import { RestBindings, get, ResponseObject, param } from '@loopback/rest';
import { inject } from '@loopback/context';
import { Request } from 'express';
import { DeviceUpPayload } from '../models';
// import {inject} from '@loopback/context';

const DEVICE_UP_RESPONSE: ResponseObject = {
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
      '200': DEVICE_UP_RESPONSE,
    },
  })
  async fromHex(
    @param.path.string('hexStr') hexStr: string
  ): Promise<object> {
    hexStr = hexStr || "0c27021e1a57025bb613034226690364a1ef635df7826da64fa24e988024bc5b71e0893e97fcd60c20bbb300900b00000000";
    const buf = Buffer.from(hexStr, "hex");
    return this.bufferToModel(buf);
  }

  @get('/device-up-payload/from-base64/{base64Str}', {
    responses: {
      '200': DEVICE_UP_RESPONSE,
    },
  })
  async fromBase64(
    @param.path.string('base64Str') base64Str: string
  ): Promise<object> {

    const buf = Buffer.from(base64Str, "base64");
    return this.bufferToModel(buf);
  }


  bufferToModel(buf: Buffer) {
    const deviceUpPayload = new DeviceUpPayload()

    let part = buf.slice(0, 1).reverse()
    let hex = this.toHex(part as Buffer)
    deviceUpPayload.protocolVersion = parseInt(hex, 16) / 10

    part = buf.slice(1, 3).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.commandId = hex

    part = buf.slice(3, 7).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.longitude = parseInt(hex, 16) * 0.000001


    part = buf.slice(7, 11).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.latitude = parseInt(hex, 16) * 0.000001

    part = buf.slice(11, 12).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.gpsFixStatus = parseInt(hex, 16) / 32

    part = buf.slice(12, 13).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.reserve = hex

    part = buf.slice(13, 15).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.calorie = parseInt(hex, 16)

    part = buf.slice(15, 16).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.batteryCapacity = parseInt(hex, 16)

    part = buf.slice(16, 20).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.dateTime = parseInt(hex, 16)*1000

    part = buf.slice(20, 40).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.beaconId = hex

    part = buf.slice(40, 41).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.beaconType = parseInt(hex, 16) / 32

    part = buf.slice(41, 42).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.rssi = hex

    part = buf.slice(42, 43).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.txPower = parseInt(hex, 16)

    part = buf.slice(43, 44).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.heartRate = parseInt(hex, 16)

    part = buf.slice(44, 46).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.temperature = parseInt(hex, 16) / 100

    part = buf.slice(46, 48).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.step = parseInt(hex, 16)

    part = buf.slice(48, 50).reverse()
    hex = this.toHex(part as Buffer)
    deviceUpPayload.distance = parseInt(hex, 16)

    return deviceUpPayload;
  }

  toHex(buf: Buffer): string {
    return buf.toString('hex')
  }

}
