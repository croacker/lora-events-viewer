import {Model, model, property} from '@loopback/repository';

@model({settings: {}})
export class DeviceUpPayload extends Model {

  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  protocolVersion: number;

  @property({
    type: 'string',
  })
  commandId?: string;

  @property({
    type: 'number',
  })
  longitude?: number;

  @property({
    type: 'number',
  })
  latitude?: number;

  @property({
    type: 'number',
  })
  gpsFixStatus?: number;

  @property({
    type: 'string',
  })
  reserve?: string;

  @property({
    type: 'number',
  })
  calorie?: number;

  @property({
    type: 'number',
  })
  batteryCapacity?: number;

  @property({
    type: 'number',
  })
  dateTime?: number;

  @property({
    type: 'string',
  })
  beaconId?: string;

  @property({
    type: 'number',
  })
  beaconType?: number;

  @property({
    type: 'string',
  })
  rssi?: string;

  @property({
    type: 'number',
  })
  txPower?: number;

  @property({
    type: 'number',
  })
  heartRate?: number;

  @property({
    type: 'number',
  })
  temperature?: number;

  @property({
    type: 'number',
  })
  step?: number;

  @property({
    type: 'number',
  })
  distance?: number;


  constructor(data?: Partial<DeviceUpPayload>) {
    super(data);
  }
}

export interface DeviceUpPayloadRelations {
  // describe navigational properties here
}

export type DeviceUpPayloadWithRelations = DeviceUpPayload & DeviceUpPayloadRelations;
