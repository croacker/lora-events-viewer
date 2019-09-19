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
import {DeviceErrorV} from '../models';
import {DeviceErrorVRepository} from '../repositories';

export class DeviceErrorVController {
  constructor(
    @repository(DeviceErrorVRepository)
    public deviceErrorVRepository : DeviceErrorVRepository,
  ) {}

  @get('/device-error-vs/count', {
    responses: {
      '200': {
        description: 'DeviceError model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(DeviceErrorV)) where?: Where<DeviceErrorV>,
  ): Promise<Count> {
    return this.deviceErrorVRepository.count(where);
  }

  @get('/device-error-vs', {
    responses: {
      '200': {
        description: 'Array of DeviceError model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(DeviceErrorV)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(DeviceErrorV)) filter?: Filter<DeviceErrorV>,
  ): Promise<DeviceErrorV[]> {
    return this.deviceErrorVRepository.find(filter);
  }

  @get('/device-error-vs/{id}', {
    responses: {
      '200': {
        description: 'DeviceError model instance',
        content: {'application/json': {schema: getModelSchemaRef(DeviceErrorV)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<DeviceErrorV> {
    return this.deviceErrorVRepository.findById(id);
  }


}
