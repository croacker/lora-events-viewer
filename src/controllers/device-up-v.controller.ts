import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {DeviceUpV} from '../models';
import {DeviceUpVRepository} from '../repositories';

export class DeviceUpVController {
  constructor(
    @repository(DeviceUpVRepository)
    public deviceUpVRepository : DeviceUpVRepository,
  ) {}

  @post('/device-up-vs', {
    responses: {
      '200': {
        description: 'DeviceUpV model instance',
        content: {'application/json': {schema: getModelSchemaRef(DeviceUpV)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceUpV, {exclude: ['id']}),
        },
      },
    })
    deviceUpV: Omit<DeviceUpV, 'id'>,
  ): Promise<DeviceUpV> {
    return this.deviceUpVRepository.create(deviceUpV);
  }

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

  @patch('/device-up-vs', {
    responses: {
      '200': {
        description: 'DeviceUpV PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceUpV, {partial: true}),
        },
      },
    })
    deviceUpV: DeviceUpV,
    @param.query.object('where', getWhereSchemaFor(DeviceUpV)) where?: Where<DeviceUpV>,
  ): Promise<Count> {
    return this.deviceUpVRepository.updateAll(deviceUpV, where);
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

  @patch('/device-up-vs/{id}', {
    responses: {
      '204': {
        description: 'DeviceUpV PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceUpV, {partial: true}),
        },
      },
    })
    deviceUpV: DeviceUpV,
  ): Promise<void> {
    await this.deviceUpVRepository.updateById(id, deviceUpV);
  }

  @put('/device-up-vs/{id}', {
    responses: {
      '204': {
        description: 'DeviceUpV PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() deviceUpV: DeviceUpV,
  ): Promise<void> {
    await this.deviceUpVRepository.replaceById(id, deviceUpV);
  }

  @del('/device-up-vs/{id}', {
    responses: {
      '204': {
        description: 'DeviceUpV DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.deviceUpVRepository.deleteById(id);
  }
}
