import {DefaultCrudRepository} from '@loopback/repository';
import {DeviceLocation, DeviceLocationRelations} from '../models';
import {LoraeventsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeviceLocationRepository extends DefaultCrudRepository<
  DeviceLocation,
  typeof DeviceLocation.prototype.id,
  DeviceLocationRelations
> {
  constructor(
    @inject('datasources.loraevents') dataSource: LoraeventsDataSource,
  ) {
    super(DeviceLocation, dataSource);
  }
}
