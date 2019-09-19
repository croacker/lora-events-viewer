import {DefaultCrudRepository} from '@loopback/repository';
import {DeviceAckV, DeviceAckVRelations} from '../models';
import {LoraeventsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeviceAckVRepository extends DefaultCrudRepository<
  DeviceAckV,
  typeof DeviceAckV.prototype.id,
  DeviceAckVRelations
> {
  constructor(
    @inject('datasources.loraevents') dataSource: LoraeventsDataSource,
  ) {
    super(DeviceAckV, dataSource);
  }
}
