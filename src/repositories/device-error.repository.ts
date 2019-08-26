import {DefaultCrudRepository} from '@loopback/repository';
import {DeviceError, DeviceErrorRelations} from '../models';
import {LoraeventsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeviceErrorRepository extends DefaultCrudRepository<
  DeviceError,
  typeof DeviceError.prototype.id,
  DeviceErrorRelations
> {
  constructor(
    @inject('datasources.loraevents') dataSource: LoraeventsDataSource,
  ) {
    super(DeviceError, dataSource);
  }
}
