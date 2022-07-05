import 'dotenv/config';

const config = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: 'Things',
  host: 'dataDb',
  port: Number(process.env.DB_PORT) || 3004,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

// export default config; ---> NÃO FUNCIONA <----
module.exports = config; 