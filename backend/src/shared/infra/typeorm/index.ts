import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = 'database_mysql'): Promise<Connection> => {
  const defaultConnection = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultConnection, {
      host: process.env.NODE_ENV === 'test' ? 'localhost' : host,
      database:
        process.env.NODE_ENV === 'test'
          ? 'joinbackend_test'
          : defaultConnection.database,
    }),
  );
};
