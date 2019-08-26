import { Entity, model, property } from '@loopback/repository';

@model({ settings: {}, name: 'device_location' })
export class DeviceStatus extends Entity {
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
    name: 'margin',
  })
  margin?: number;

  @property({
    type: 'boolean',
    name: 'external_power_source',
  })
  externalPowerSource?: boolean;

  @property({
    type: 'boolean',
    name: 'battery_level_unavailable',
  })
  batteryLevelUnavailable?: boolean;

  @property({
    type: 'number',
    name: 'battery_level',
  })
  batteryLevel?: number;

  @property({
    type: 'string',
    name: 'tags',
  })
  tags?: string;

  constructor(data?: Partial<DeviceStatus>) {
    super(data);
  }
}

export interface DeviceStatusRelations {
  // describe navigational properties here
}

export type DeviceStatusWithRelations = DeviceStatus & DeviceStatusRelations;
