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
import {DeviceUp} from '../models';
import {DeviceUpRepository} from '../repositories';

export class DeviceUpController {
  constructor(
    @repository(DeviceUpRepository)
    public deviceUpRepository : DeviceUpRepository,
  ) {}

  @post('/device-ups', {
    responses: {
      '200': {
        description: 'DeviceUp model instance',
        content: {'application/json': {schema: getModelSchemaRef(DeviceUp)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceUp, {exclude: ['id']}),
        },
      },
    })
    deviceUp: Omit<DeviceUp, 'id'>,
  ): Promise<DeviceUp> {
    return this.deviceUpRepository.create(deviceUp);
  }

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

  @patch('/device-ups', {
    responses: {
      '200': {
        description: 'DeviceUp PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceUp, {partial: true}),
        },
      },
    })
    deviceUp: DeviceUp,
    @param.query.object('where', getWhereSchemaFor(DeviceUp)) where?: Where<DeviceUp>,
  ): Promise<Count> {
    return this.deviceUpRepository.updateAll(deviceUp, where);
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

  @patch('/device-ups/{id}', {
    responses: {
      '204': {
        description: 'DeviceUp PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceUp, {partial: true}),
        },
      },
    })
    deviceUp: DeviceUp,
  ): Promise<void> {
    await this.deviceUpRepository.updateById(id, deviceUp);
  }

  @put('/device-ups/{id}', {
    responses: {
      '204': {
        description: 'DeviceUp PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() deviceUp: DeviceUp,
  ): Promise<void> {
    await this.deviceUpRepository.replaceById(id, deviceUp);
  }

  @del('/device-ups/{id}', {
    responses: {
      '204': {
        description: 'DeviceUp DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.deviceUpRepository.deleteById(id);
  }
}
