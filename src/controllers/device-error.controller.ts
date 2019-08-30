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
import {DeviceError} from '../models';
import {DeviceErrorRepository} from '../repositories';

export class DeviceErrorController {
  constructor(
    @repository(DeviceErrorRepository)
    public deviceErrorRepository : DeviceErrorRepository,
  ) {}

  // @post('/device-errors', {
  //   responses: {
  //     '200': {
  //       description: 'DeviceError model instance',
  //       content: {'application/json': {schema: getModelSchemaRef(DeviceError)}},
  //     },
  //   },
  // })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceError, {exclude: ['id']}),
        },
      },
    })
    deviceError: Omit<DeviceError, 'id'>,
  ): Promise<DeviceError> {
    return this.deviceErrorRepository.create(deviceError);
  }

  @get('/device-errors/count', {
    responses: {
      '200': {
        description: 'DeviceError model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(DeviceError)) where?: Where<DeviceError>,
  ): Promise<Count> {
    return this.deviceErrorRepository.count(where);
  }

  @get('/device-errors', {
    responses: {
      '200': {
        description: 'Array of DeviceError model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(DeviceError)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(DeviceError)) filter?: Filter<DeviceError>,
  ): Promise<DeviceError[]> {
    return this.deviceErrorRepository.find(filter);
  }

  // @patch('/device-errors', {
  //   responses: {
  //     '200': {
  //       description: 'DeviceError PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceError, {partial: true}),
        },
      },
    })
    deviceError: DeviceError,
    @param.query.object('where', getWhereSchemaFor(DeviceError)) where?: Where<DeviceError>,
  ): Promise<Count> {
    return this.deviceErrorRepository.updateAll(deviceError, where);
  }

  @get('/device-errors/{id}', {
    responses: {
      '200': {
        description: 'DeviceError model instance',
        content: {'application/json': {schema: getModelSchemaRef(DeviceError)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<DeviceError> {
    return this.deviceErrorRepository.findById(id);
  }

  // @patch('/device-errors/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'DeviceError PATCH success',
  //     },
  //   },
  // })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceError, {partial: true}),
        },
      },
    })
    deviceError: DeviceError,
  ): Promise<void> {
    await this.deviceErrorRepository.updateById(id, deviceError);
  }

  // @put('/device-errors/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'DeviceError PUT success',
  //     },
  //   },
  // })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() deviceError: DeviceError,
  ): Promise<void> {
    await this.deviceErrorRepository.replaceById(id, deviceError);
  }

  // @del('/device-errors/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'DeviceError DELETE success',
  //     },
  //   },
  // })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.deviceErrorRepository.deleteById(id);
  }
}
