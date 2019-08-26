import {DefaultCrudRepository} from '@loopback/repository';
import {DeviceJoin, DeviceJoinRelations} from '../models';
import {LoraeventsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeviceJoinRepository extends DefaultCrudRepository<
  DeviceJoin,
  typeof DeviceJoin.prototype.id,
  DeviceJoinRelations
> {
  constructor(
    @inject('datasources.loraevents') dataSource: LoraeventsDataSource,
  ) {
    super(DeviceJoin, dataSource);
  }
}
