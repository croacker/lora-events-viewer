import { Entity, model, property } from '@loopback/repository';

@model({ settings: {}, name: 'device_up' })
export class DeviceUp extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'date',
    required: true,
    name: 'received_at',
  })
  receivedAt: string;

  @property({
    type: 'string',
    name: 'dev_eui',
  })
  devEui?: string;

  @property({
    type: 'string',
    name: 'device_name',
  })
  deviceName?: string;

  @property({
    type: 'number',
    name: 'application_id',
  })
  applicationId?: number;

  @property({
    type: 'string',
    name: 'application_name',
  })
  applicationName?: string;

  @property({
    type: 'number',
    name: 'frequency',
  })
  frequency?: number;

  @property({
    type: 'number',
    name: 'dr',
  })
  dr?: number;

  @property({
    type: 'boolean',
    name: 'adr',
  })
  adr?: boolean;

  @property({
    type: 'number',
    name: 'f_cnt',
  })
  fCnt?: number;

  @property({
    type: 'number',
    name: 'f_port',
  })
  fPort?: number;

  @property({
    type: 'string',
    name: 'tags',
  })
  tags?: string;

  @property({
    type: 'string',
    name: 'data',
  })
  data?: Buffer;

  @property({
    type: 'string',
    name: 'rx_info',
  })
  rxInfo?: string;

  @property({
    type: 'string',
    name: 'object',
  })
  object?: string;


  constructor(data?: Partial<DeviceUp>) {
    super(data);

    if (data != null) {
      const buf = data.data != null ? data.data : new Buffer(0)

      var part = buf.slice(0, 1).reverse()
      var hex = this.toHex(part as Buffer)
      const protocolVersion = parseInt(hex, 16) / 10
      console.log(`protocolVersion = ${protocolVersion}`);

      var part = buf.slice(1, 3).reverse()
      var hex = this.toHex(part as Buffer)
      const commandId = hex
      console.log(`commandId = ${commandId}`);

      var part = buf.slice(3, 7).reverse()
      var hex = this.toHex(part as Buffer)
      const longitude = parseInt(hex, 16) * 0.000001
      console.log(`longitude = ${longitude}`);

      var part = buf.slice(7, 11).reverse()
      var hex = this.toHex(part as Buffer)
      const latitude = parseInt(hex, 16) * 0.000001
      console.log(`latitude = ${latitude}`);

      var part = buf.slice(11, 12).reverse()
      var hex = this.toHex(part as Buffer)
      const gpsFixStatus = parseInt(hex, 16) / 32
      console.log(`gpsFixStatus = ${gpsFixStatus}`);

      var part = buf.slice(12, 13).reverse()
      var hex = this.toHex(part as Buffer)
      const reserve = hex
      console.log(`reserve = ${reserve}`);

      var part = buf.slice(13, 15).reverse()
      var hex = this.toHex(part as Buffer)
      const calorie = parseInt(hex, 16)
      console.log(`calorie = ${calorie}`);

      var part = buf.slice(15, 16).reverse()
      var hex = this.toHex(part as Buffer)
      const batteryCapacity = parseInt(hex, 16)
      console.log(`batteryCapacity = ${batteryCapacity}`);

      var part = buf.slice(16, 20).reverse()
      var hex = this.toHex(part as Buffer)
      const dateTime = parseInt(hex, 16)
      console.log(`dateTime = ${dateTime}`);

      var part = buf.slice(20, 40).reverse()
      var hex = this.toHex(part as Buffer)
      const beaconId = hex
      console.log(`beaconId = ${beaconId}`);

      var part = buf.slice(40, 41).reverse()
      var hex = this.toHex(part as Buffer)
      const beaconType = parseInt(hex, 16) / 32
      console.log(`beaconType = ${beaconType}`);

      var part = buf.slice(41, 42).reverse()
      var hex = this.toHex(part as Buffer)
      const rssi = hex
      console.log(`rssi = ${rssi}`);

      var part = buf.slice(42, 43).reverse()
      var hex = this.toHex(part as Buffer)
      const txPower = parseInt(hex, 16)
      console.log(`txPower = ${txPower}`);

      var part = buf.slice(43, 44).reverse()
      var hex = this.toHex(part as Buffer)
      const heartRate = parseInt(hex, 16)
      console.log(`heartRate = ${heartRate}`);

      var part = buf.slice(44, 46).reverse()
      var hex = this.toHex(part as Buffer)
      const temperature = parseInt(hex, 16) / 100
      console.log(`temperature = ${temperature}`);

      var part = buf.slice(46, 48).reverse()
      var hex = this.toHex(part as Buffer)
      const step = parseInt(hex, 16)
      console.log(`step = ${step}`);

      var part = buf.slice(48, 50).reverse()
      var hex = this.toHex(part as Buffer)
      const distance = parseInt(hex, 16)
      console.log(`distance = ${distance}`);

    }
  }

  toHex(buf: Buffer) {
    return buf.toString('hex')
  }
}

export interface DeviceUpRelations {
  // describe navigational properties here
}

export type DeviceUpWithRelations = DeviceUp & DeviceUpRelations;
