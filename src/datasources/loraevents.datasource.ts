import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './loraevents.datasource.json';

export class LoraeventsDataSource extends juggler.DataSource {
  static dataSourceName = 'loraevents';

  constructor(
    @inject('datasources.config.loraevents', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
