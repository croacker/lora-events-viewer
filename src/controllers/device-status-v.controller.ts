import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  requestBody,
} from '@loopback/rest';
import { DeviceStatusV } from '../models';
import { DeviceStatusVRepository } from '../repositories';

export class DeviceStatusVController {
  constructor(
    @repository(DeviceStatusVRepository)
    public deviceStatusVRepository: DeviceStatusVRepository,
  ) { }

  @get('/device-statuse-vs/count', {
    responses: {
      '200': {
        description: 'DeviceStatus model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(DeviceStatusV)) where?: Where<DeviceStatusV>,
  ): Promise<Count> {
    return this.deviceStatusVRepository.count(where);
  }

  @get('/device-statuse-vs', {
    responses: {
      '200': {
        description: 'Array of DeviceStatus model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(DeviceStatusV) },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(DeviceStatusV)) filter?: Filter<DeviceStatusV>,
  ): Promise<DeviceStatusV[]> {
    return this.deviceStatusVRepository.find(filter);
  }

  @get('/device-statuse-vs/{id}', {
    responses: {
      '200': {
        description: 'DeviceStatus model instance',
        content: { 'application/json': { schema: getModelSchemaRef(DeviceStatusV) } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<DeviceStatusV> {
    return this.deviceStatusVRepository.findById(id);
  }

}
