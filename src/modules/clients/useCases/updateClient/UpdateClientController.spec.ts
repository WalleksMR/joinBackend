import MokeTest from '@config/MokeTest';
import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

describe('Update Client Controller', () => {
  let connection: Connection;
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able update a client', async () => {
    const client = await request(app)
      .post('/clients')
      .send(MokeTest.CreateClient);

    const updateClient = await request(app)
      .patch(`/clients/${client.body.id}`)
      .send(MokeTest.UpdateClient);

    expect(updateClient.body.id).toBe(client.body.id);
  });
});
