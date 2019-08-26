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
import {DeviceAck} from '../models';
import {DeviceAckRepository} from '../repositories';

export class DeviceAckController {
  constructor(
    @repository(DeviceAckRepository)
    public deviceAckRepository : DeviceAckRepository,
  ) {}

  @post('/device-acks', {
    responses: {
      '200': {
        description: 'DeviceAck model instance',
        content: {'application/json': {schema: getModelSchemaRef(DeviceAck)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceAck, {exclude: ['id']}),
        },
      },
    })
    deviceAck: Omit<DeviceAck, 'id'>,
  ): Promise<DeviceAck> {
    return this.deviceAckRepository.create(deviceAck);
  }

  @get('/device-acks/count', {
    responses: {
      '200': {
        description: 'DeviceAck model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(DeviceAck)) where?: Where<DeviceAck>,
  ): Promise<Count> {
    return this.deviceAckRepository.count(where);
  }

  @get('/device-acks', {
    responses: {
      '200': {
        description: 'Array of DeviceAck model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(DeviceAck)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(DeviceAck)) filter?: Filter<DeviceAck>,
  ): Promise<DeviceAck[]> {
    return this.deviceAckRepository.find(filter);
  }

  @patch('/device-acks', {
    responses: {
      '200': {
        description: 'DeviceAck PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceAck, {partial: true}),
        },
      },
    })
    deviceAck: DeviceAck,
    @param.query.object('where', getWhereSchemaFor(DeviceAck)) where?: Where<DeviceAck>,
  ): Promise<Count> {
    return this.deviceAckRepository.updateAll(deviceAck, where);
  }

  @get('/device-acks/{id}', {
    responses: {
      '200': {
        description: 'DeviceAck model instance',
        content: {'application/json': {schema: getModelSchemaRef(DeviceAck)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<DeviceAck> {
    return this.deviceAckRepository.findById(id);
  }

  @patch('/device-acks/{id}', {
    responses: {
      '204': {
        description: 'DeviceAck PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceAck, {partial: true}),
        },
      },
    })
    deviceAck: DeviceAck,
  ): Promise<void> {
    await this.deviceAckRepository.updateById(id, deviceAck);
  }

  @put('/device-acks/{id}', {
    responses: {
      '204': {
        description: 'DeviceAck PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() deviceAck: DeviceAck,
  ): Promise<void> {
    await this.deviceAckRepository.replaceById(id, deviceAck);
  }

  @del('/device-acks/{id}', {
    responses: {
      '204': {
        description: 'DeviceAck DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.deviceAckRepository.deleteById(id);
  }
}
