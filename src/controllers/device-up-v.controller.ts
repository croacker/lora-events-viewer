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
} from '@loopback/rest';
import {DeviceUpV} from '../models';
import {DeviceUpVRepository} from '../repositories';

export class DeviceUpVController {
  constructor(
    @repository(DeviceUpVRepository)
    public deviceUpVRepository : DeviceUpVRepository,
  ) {}

  @get('/device-up-vs/count', {
    responses: {
      '200': {
        description: 'DeviceUpV model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(DeviceUpV)) where?: Where<DeviceUpV>,
  ): Promise<Count> {
    return this.deviceUpVRepository.count(where);
  }

  @get('/device-up-vs', {
    responses: {
      '200': {
        description: 'Array of DeviceUpV model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(DeviceUpV)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(DeviceUpV)) filter?: Filter<DeviceUpV>,
  ): Promise<DeviceUpV[]> {
    return this.deviceUpVRepository.find(filter);
  }

  @get('/device-up-vs/{id}', {
    responses: {
      '200': {
        description: 'DeviceUpV model instance',
        content: {'application/json': {schema: getModelSchemaRef(DeviceUpV)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<DeviceUpV> {
    return this.deviceUpVRepository.findById(id);
  }
}
