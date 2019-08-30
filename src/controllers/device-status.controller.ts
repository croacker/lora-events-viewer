import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  // post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  // patch,
  // put,
  // del,
  requestBody,
} from '@loopback/rest';
import {DeviceStatus} from '../models';
import {DeviceStatusRepository} from '../repositories';

export class DeviceStatusController {
  constructor(
    @repository(DeviceStatusRepository)
    public deviceStatusRepository : DeviceStatusRepository,
  ) {}

  // @post('/device-statuses', {
  //   responses: {
  //     '200': {
  //       description: 'DeviceStatus model instance',
  //       content: {'application/json': {schema: getModelSchemaRef(DeviceStatus)}},
  //     },
  //   },
  // })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceStatus, {exclude: ['id']}),
        },
      },
    })
    deviceStatus: Omit<DeviceStatus, 'id'>,
  ): Promise<DeviceStatus> {
    return this.deviceStatusRepository.create(deviceStatus);
  }

  @get('/device-statuses/count', {
    responses: {
      '200': {
        description: 'DeviceStatus model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(DeviceStatus)) where?: Where<DeviceStatus>,
  ): Promise<Count> {
    return this.deviceStatusRepository.count(where);
  }

  @get('/device-statuses', {
    responses: {
      '200': {
        description: 'Array of DeviceStatus model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(DeviceStatus)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(DeviceStatus)) filter?: Filter<DeviceStatus>,
  ): Promise<DeviceStatus[]> {
    return this.deviceStatusRepository.find(filter);
  }

  // @patch('/device-statuses', {
  //   responses: {
  //     '200': {
  //       description: 'DeviceStatus PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceStatus, {partial: true}),
        },
      },
    })
    deviceStatus: DeviceStatus,
    @param.query.object('where', getWhereSchemaFor(DeviceStatus)) where?: Where<DeviceStatus>,
  ): Promise<Count> {
    return this.deviceStatusRepository.updateAll(deviceStatus, where);
  }

  @get('/device-statuses/{id}', {
    responses: {
      '200': {
        description: 'DeviceStatus model instance',
        content: {'application/json': {schema: getModelSchemaRef(DeviceStatus)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<DeviceStatus> {
    return this.deviceStatusRepository.findById(id);
  }

  // @patch('/device-statuses/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'DeviceStatus PATCH success',
  //     },
  //   },
  // })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceStatus, {partial: true}),
        },
      },
    })
    deviceStatus: DeviceStatus,
  ): Promise<void> {
    await this.deviceStatusRepository.updateById(id, deviceStatus);
  }

  // @put('/device-statuses/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'DeviceStatus PUT success',
  //     },
  //   },
  // })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() deviceStatus: DeviceStatus,
  ): Promise<void> {
    await this.deviceStatusRepository.replaceById(id, deviceStatus);
  }

  // @del('/device-statuses/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'DeviceStatus DELETE success',
  //     },
  //   },
  // })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.deviceStatusRepository.deleteById(id);
  }
}
