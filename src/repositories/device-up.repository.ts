import {DefaultCrudRepository} from '@loopback/repository';
import {DeviceUp, DeviceUpRelations} from '../models';
import {LoraeventsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeviceUpRepository extends DefaultCrudRepository<
  DeviceUp,
  typeof DeviceUp.prototype.id,
  DeviceUpRelations
> {
  constructor(
    @inject('datasources.loraevents') dataSource: LoraeventsDataSource,
  ) {
    super(DeviceUp, dataSource);
  }
}
