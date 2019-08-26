import {DefaultCrudRepository} from '@loopback/repository';
import {DeviceStatus, DeviceStatusRelations} from '../models';
import {LoraeventsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeviceStatusRepository extends DefaultCrudRepository<
  DeviceStatus,
  typeof DeviceStatus.prototype.id,
  DeviceStatusRelations
> {
  constructor(
    @inject('datasources.loraevents') dataSource: LoraeventsDataSource,
  ) {
    super(DeviceStatus, dataSource);
  }
}
