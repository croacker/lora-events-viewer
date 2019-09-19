import { DefaultCrudRepository } from '@loopback/repository';
import { DeviceStatusV, DeviceStatusVRelations } from '../models';
import { LoraeventsDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class DeviceStatusVRepository extends DefaultCrudRepository<
  DeviceStatusV,
  typeof DeviceStatusV.prototype.id,
  DeviceStatusVRelations
  > {
  constructor(
    @inject('datasources.loraevents') dataSource: LoraeventsDataSource,
  ) {
    super(DeviceStatusV, dataSource);
  }
}
