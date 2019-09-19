import {DefaultCrudRepository} from '@loopback/repository';
import {DeviceJoinV, DeviceJoinVRelations} from '../models';
import {LoraeventsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeviceJoinVRepository extends DefaultCrudRepository<
  DeviceJoinV,
  typeof DeviceJoinV.prototype.id,
  DeviceJoinVRelations
> {
  constructor(
    @inject('datasources.loraevents') dataSource: LoraeventsDataSource,
  ) {
    super(DeviceJoinV, dataSource);
  }
}
