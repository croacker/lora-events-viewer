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
import {DeviceLocation} from '../models';
import {DeviceLocationRepository} from '../repositories';

export class DeviceLocationController {
  constructor(
    @repository(DeviceLocationRepository)
    public deviceLocationRepository : DeviceLocationRepository,
  ) {}

  // @post('/device-locations', {
  //   responses: {
  //     '200': {
  //       description: 'DeviceLocation model instance',
  //       content: {'application/json': {schema: getModelSchemaRef(DeviceLocation)}},
  //     },
  //   },
  // })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceLocation, {exclude: ['id']}),
        },
      },
    })
    deviceLocation: Omit<DeviceLocation, 'id'>,
  ): Promise<DeviceLocation> {
    return this.deviceLocationRepository.create(deviceLocation);
  }

  @get('/device-locations/count', {
    responses: {
      '200': {
        description: 'DeviceLocation model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(DeviceLocation)) where?: Where<DeviceLocation>,
  ): Promise<Count> {
    return this.deviceLocationRepository.count(where);
  }

  @get('/device-locations', {
    responses: {
      '200': {
        description: 'Array of DeviceLocation model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(DeviceLocation)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(DeviceLocation)) filter?: Filter<DeviceLocation>,
  ): Promise<DeviceLocation[]> {
    return this.deviceLocationRepository.find(filter);
  }

  // @patch('/device-locations', {
  //   responses: {
  //     '200': {
  //       description: 'DeviceLocation PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceLocation, {partial: true}),
        },
      },
    })
    deviceLocation: DeviceLocation,
    @param.query.object('where', getWhereSchemaFor(DeviceLocation)) where?: Where<DeviceLocation>,
  ): Promise<Count> {
    return this.deviceLocationRepository.updateAll(deviceLocation, where);
  }

  @get('/device-locations/{id}', {
    responses: {
      '200': {
        description: 'DeviceLocation model instance',
        content: {'application/json': {schema: getModelSchemaRef(DeviceLocation)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<DeviceLocation> {
    return this.deviceLocationRepository.findById(id);
  }

  // @patch('/device-locations/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'DeviceLocation PATCH success',
  //     },
  //   },
  // })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DeviceLocation, {partial: true}),
        },
      },
    })
    deviceLocation: DeviceLocation,
  ): Promise<void> {
    await this.deviceLocationRepository.updateById(id, deviceLocation);
  }

  // @put('/device-locations/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'DeviceLocation PUT success',
  //     },
  //   },
  // })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() deviceLocation: DeviceLocation,
  ): Promise<void> {
    await this.deviceLocationRepository.replaceById(id, deviceLocation);
  }

  // @del('/device-locations/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'DeviceLocation DELETE success',
  //     },
  //   },
  // })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.deviceLocationRepository.deleteById(id);
  }
}
