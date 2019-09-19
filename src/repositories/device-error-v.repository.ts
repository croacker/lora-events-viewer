import {DefaultCrudRepository} from '@loopback/repository';
import {DeviceErrorV, DeviceErrorVRelations} from '../models';
import {LoraeventsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeviceErrorVRepository extends DefaultCrudRepository<
  DeviceErrorV,
  typeof DeviceErrorV.prototype.id,
  DeviceErrorVRelations
> {
  constructor(
    @inject('datasources.loraevents') dataSource: LoraeventsDataSource,
  ) {
    super(DeviceErrorV, dataSource);
  }
}
