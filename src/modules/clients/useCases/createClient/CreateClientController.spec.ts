import MokeTest from '@config/MokeTest';
import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

describe('Create Client Controller', () => {
  let connection: Connection;
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able create a new client', async () => {
    const client = await request(app)
      .post('/clients')
      .send(MokeTest.CreateClient);

    expect(client.statusCode).toBe(201);
    expect(client.body.cnpj).toBe(MokeTest.CreateClient.cnpj);
  });

  it('should not be able create a new client if cnpj already exists', async () => {
    await request(app).post('/clients').send(MokeTest.CreateClient);
    const client = await request(app)
      .post('/clients')
      .send(MokeTest.CreateClient);

    expect(client.statusCode).toBe(400);
  });
});
