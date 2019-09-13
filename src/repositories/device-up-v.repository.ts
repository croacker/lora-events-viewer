import {DefaultCrudRepository} from '@loopback/repository';
import {DeviceUpV, DeviceUpVRelations} from '../models';
import {LoraeventsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeviceUpVRepository extends DefaultCrudRepository<
  DeviceUpV,
  typeof DeviceUpV.prototype.id,
  DeviceUpVRelations
> {
  constructor(
    @inject('datasources.loraevents') dataSource: LoraeventsDataSource,
  ) {
    super(DeviceUpV, dataSource);
  }
}
