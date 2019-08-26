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
  data?: string;

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
  }
}

export interface DeviceUpRelations {
  // describe navigational properties here
}

export type DeviceUpWithRelations = DeviceUp & DeviceUpRelations;
