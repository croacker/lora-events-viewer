import {DefaultCrudRepository} from '@loopback/repository';
import {DeviceLocationV, DeviceLocationVRelations} from '../models';
import {LoraeventsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeviceLocationVRepository extends DefaultCrudRepository<
  DeviceLocationV,
  typeof DeviceLocationV.prototype.id,
  DeviceLocationVRelations
> {
  constructor(
    @inject('datasources.loraevents') dataSource: LoraeventsDataSource,
  ) {
    super(DeviceLocationV, dataSource);
  }
}
