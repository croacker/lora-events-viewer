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
import {DeviceLocationV} from '../models';
import {DeviceLocationVRepository} from '../repositories';

export class DeviceLocationVController {
  constructor(
    @repository(DeviceLocationVRepository)
    public deviceLocationVRepository : DeviceLocationVRepository,
  ) {}

  @get('/device-location-vs/count', {
    responses: {
      '200': {
        description: 'DeviceLocation model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(DeviceLocationV)) where?: Where<DeviceLocationV>,
  ): Promise<Count> {
    return this.deviceLocationVRepository.count(where);
  }

  @get('/device-location-vs', {
    responses: {
      '200': {
        description: 'Array of DeviceLocation model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(DeviceLocationV)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(DeviceLocationV)) filter?: Filter<DeviceLocationV>,
  ): Promise<DeviceLocationV[]> {
    return this.deviceLocationVRepository.find(filter);
  }

  @get('/device-location-vs/{id}', {
    responses: {
      '200': {
        description: 'DeviceLocation model instance',
        content: {'application/json': {schema: getModelSchemaRef(DeviceLocationV)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<DeviceLocationV> {
    return this.deviceLocationVRepository.findById(id);
  }

}
