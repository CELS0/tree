/* eslint-disable import/no-extraneous-dependencies */
import 'reflect-metadata';
import 'pg';
import { Connection, createConnection } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Category } from '../entities/Category';

export class DBManager {
    private static connection: Connection;

    public static async getConnection(): Promise<Connection> {
        if (!DBManager.connection || !DBManager.connection.isConnected) {
            if (DBManager.connection) {
                await DBManager.connection.close();
            }
            DBManager.connection = await createConnection({
                url: 'postgres://postgres:12345678@localhost:5432/refreshToken',
                type: 'postgres',
                entities: [
                    Category,
                ],
                synchronize: false,
                namingStrategy: new SnakeNamingStrategy(),
            });
        }

        return DBManager.connection;
    }
}
