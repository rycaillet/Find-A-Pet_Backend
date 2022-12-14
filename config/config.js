require('dotenv').config()
module.exports = {
  development: {
    database: 'FAP_deployment',
    dialect: 'postgres'
  },
  test: {
    database: 'FAP_deployment',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
