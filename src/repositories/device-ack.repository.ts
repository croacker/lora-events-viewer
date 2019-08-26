import {DefaultCrudRepository} from '@loopback/repository';
import {DeviceAck, DeviceAckRelations} from '../models';
import {LoraeventsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeviceAckRepository extends DefaultCrudRepository<
  DeviceAck,
  typeof DeviceAck.prototype.id,
  DeviceAckRelations
> {
  constructor(
    @inject('datasources.loraevents') dataSource: LoraeventsDataSource,
  ) {
    super(DeviceAck, dataSource);
  }
}
