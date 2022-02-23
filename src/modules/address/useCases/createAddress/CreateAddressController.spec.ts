import MokeTest from '@config/MokeTest';
import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

describe('Create Address Controller', () => {
  let connection: Connection;
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able create a new address', async () => {
    const client = await request(app)
      .post('/clients')
      .send(MokeTest.CreateClient);

    const address = await request(app)
      .post(`/address${client.body.id}`)
      .send(MokeTest.CreateAddress);

    expect(address.statusCode).toBe(201);
  });
});
