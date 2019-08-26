import { Entity, model, property } from '@loopback/repository';

@model({ settings: {}, name: 'device_location' })
export class DeviceLocation extends Entity {
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
    required: true,
    name: 'dev_eui',
  })
  devEui: string;

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
    name: 'altitude',
  })
  altitude?: number;

  @property({
    type: 'number',
    name: 'latitude',
  })
  latitude?: number;

  @property({
    type: 'number',
    name: 'longitude',
  })
  longitude?: number;

  @property({
    type: 'string',
    name: 'geohash',
  })
  geohash?: string;

  @property({
    type: 'string',
    name: 'tags',
  })
  tags?: string;

  @property({
    type: 'number',
    name: 'accuracy',
  })
  accuracy?: number;


  constructor(data?: Partial<DeviceLocation>) {
    super(data);
  }
}

export interface DeviceLocationRelations {
  // describe navigational properties here
}

export type DeviceLocationWithRelations = DeviceLocation & DeviceLocationRelations;
