import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class DeviceAck extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'date',
    required: true,
  })
  receivedAt: string;

  @property({
    type: 'string',
    required: true,
  })
  devEui: string;

  @property({
    type: 'string',
  })
  deviceName?: string;

  @property({
    type: 'number',
  })
  applicationId?: number;

  @property({
    type: 'string',
  })
  applicationName?: string;

  @property({
    type: 'boolean',
  })
  acknowledged?: boolean;

  @property({
    type: 'number',
  })
  fCnt?: number;

  @property({
    type: 'string',
  })
  tags?: string;


  constructor(data?: Partial<DeviceAck>) {
    super(data);
  }
}

export interface DeviceAckRelations {
  // describe navigational properties here
}

export type DeviceAckWithRelations = DeviceAck & DeviceAckRelations;
