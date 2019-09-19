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
import { DeviceAckV } from '../models';
import { DeviceAckVRepository } from '../repositories';

export class DeviceAckVController {
  constructor(
    @repository(DeviceAckVRepository)
    public deviceAckVRepository: DeviceAckVRepository,
  ) { }

  @get('/device-ack-vs/count', {
    responses: {
      '200': {
        description: 'DeviceAck model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(DeviceAckV)) where?: Where<DeviceAckV>,
  ): Promise<Count> {
    return this.deviceAckVRepository.count(where);
  }

  @get('/device-ack-vs', {
    responses: {
      '200': {
        description: 'Array of DeviceAck model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(DeviceAckV) },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(DeviceAckV)) filter?: Filter<DeviceAckV>,
  ): Promise<DeviceAckV[]> {
    return this.deviceAckVRepository.find(filter);
  }

  @get('/device-ack-vs/{id}', {
    responses: {
      '200': {
        description: 'DeviceAck model instance',
        content: { 'application/json': { schema: getModelSchemaRef(DeviceAckV) } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<DeviceAckV> {
    return this.deviceAckVRepository.findById(id);
  }
}
