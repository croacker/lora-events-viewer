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
import {DeviceUp} from '../models';
import {DeviceUpRepository} from '../repositories';

export class DeviceUpController {
  constructor(
    @repository(DeviceUpRepository)
    public deviceUpRepository : DeviceUpRepository,
  ) {}

  @get('/device-ups/count', {
    responses: {
      '200': {
        description: 'DeviceUp model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(DeviceUp)) where?: Where<DeviceUp>,
  ): Promise<Count> {
    return this.deviceUpRepository.count(where);
  }

  @get('/device-ups', {
    responses: {
      '200': {
        description: 'Array of DeviceUp model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(DeviceUp)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(DeviceUp)) filter?: Filter<DeviceUp>,
  ): Promise<DeviceUp[]> {
    return this.deviceUpRepository.find(filter);
  }

  @get('/device-ups/{id}', {
    responses: {
      '200': {
        description: 'DeviceUp model instance',
        content: {'application/json': {schema: getModelSchemaRef(DeviceUp)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<DeviceUp> {
    return this.deviceUpRepository.findById(id);
  }

}
