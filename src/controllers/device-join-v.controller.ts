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
import {DeviceJoinV} from '../models';
import {DeviceJoinVRepository} from '../repositories';

export class DeviceJoinVController {
  constructor(
    @repository(DeviceJoinVRepository)
    public deviceJoinVRepository : DeviceJoinVRepository,
  ) {}

  @get('/device-join-vs/count', {
    responses: {
      '200': {
        description: 'DeviceJoin model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(DeviceJoinV)) where?: Where<DeviceJoinV>,
  ): Promise<Count> {
    return this.deviceJoinVRepository.count(where);
  }

  @get('/device-join-vs', {
    responses: {
      '200': {
        description: 'Array of DeviceJoin model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(DeviceJoinV)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(DeviceJoinV)) filter?: Filter<DeviceJoinV>,
  ): Promise<DeviceJoinV[]> {
    return this.deviceJoinVRepository.find(filter);
  }

  @get('/device-join-vs/{id}', {
    responses: {
      '200': {
        description: 'DeviceJoin model instance',
        content: {'application/json': {schema: getModelSchemaRef(DeviceJoinV)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<DeviceJoinV> {
    return this.deviceJoinVRepository.findById(id);
  }

}
