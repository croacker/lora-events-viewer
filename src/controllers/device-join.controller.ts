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
import {DeviceJoin} from '../models';
import {DeviceJoinRepository} from '../repositories';

export class DeviceJoinController {
  constructor(
    @repository(DeviceJoinRepository)
    public deviceJoinRepository : DeviceJoinRepository,
  ) {}

  @post('/device-joins', {
    responses: {
      '200': {
        description: 'DeviceJoin model instance',
        content: {'application/json': {schema: getModelSchemaRef(DeviceJoin)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceJoin, {exclude: ['id']}),
        },
      },
    })
    deviceJoin: Omit<DeviceJoin, 'id'>,
  ): Promise<DeviceJoin> {
    return this.deviceJoinRepository.create(deviceJoin);
  }

  @get('/device-joins/count', {
    responses: {
      '200': {
        description: 'DeviceJoin model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(DeviceJoin)) where?: Where<DeviceJoin>,
  ): Promise<Count> {
    return this.deviceJoinRepository.count(where);
  }

  @get('/device-joins', {
    responses: {
      '200': {
        description: 'Array of DeviceJoin model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(DeviceJoin)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(DeviceJoin)) filter?: Filter<DeviceJoin>,
  ): Promise<DeviceJoin[]> {
    return this.deviceJoinRepository.find(filter);
  }

  @patch('/device-joins', {
    responses: {
      '200': {
        description: 'DeviceJoin PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceJoin, {partial: true}),
        },
      },
    })
    deviceJoin: DeviceJoin,
    @param.query.object('where', getWhereSchemaFor(DeviceJoin)) where?: Where<DeviceJoin>,
  ): Promise<Count> {
    return this.deviceJoinRepository.updateAll(deviceJoin, where);
  }

  @get('/device-joins/{id}', {
    responses: {
      '200': {
        description: 'DeviceJoin model instance',
        content: {'application/json': {schema: getModelSchemaRef(DeviceJoin)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<DeviceJoin> {
    return this.deviceJoinRepository.findById(id);
  }

  @patch('/device-joins/{id}', {
    responses: {
      '204': {
        description: 'DeviceJoin PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceJoin, {partial: true}),
        },
      },
    })
    deviceJoin: DeviceJoin,
  ): Promise<void> {
    await this.deviceJoinRepository.updateById(id, deviceJoin);
  }

  @put('/device-joins/{id}', {
    responses: {
      '204': {
        description: 'DeviceJoin PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() deviceJoin: DeviceJoin,
  ): Promise<void> {
    await this.deviceJoinRepository.replaceById(id, deviceJoin);
  }

  @del('/device-joins/{id}', {
    responses: {
      '204': {
        description: 'DeviceJoin DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.deviceJoinRepository.deleteById(id);
  }
}
