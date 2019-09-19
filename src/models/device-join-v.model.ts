import { Entity, model, property } from '@loopback/repository';

@model({ settings: {}, name: 'device_join_v' })
export class DeviceJoinV extends Entity {
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
    type: 'string',
    name: 'dev_addr',
  })
  devAddr?: string;

  @property({
    type: 'string',
    name: 'tags',
  })
  tags?: string;


  constructor(data?: Partial<DeviceJoinV>) {
    super(data);
  }
}

export interface DeviceJoinVRelations {
}

export type DeviceJoinVWithRelations = DeviceJoinV & DeviceJoinVRelations;
