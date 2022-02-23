import MokeTest from '@config/MokeTest';
import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

describe('Update Address Controller', () => {
  let connection: Connection;
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able update a new address', async () => {
    const client = await request(app)
      .post('/clients')
      .send(MokeTest.CreateClient);

    const address = await request(app)
      .post(`/address/${client.body.id}`)
      .send(MokeTest.CreateAddress);

    const updateAddress = await request(app)
      .patch(`/address/update/${address.body.id}`)
      .send(MokeTest.UpdateAddress);

    expect(updateAddress.statusCode).toBe(201);
    expect(updateAddress.body.id).toBe(address.body.id);
  });
});
