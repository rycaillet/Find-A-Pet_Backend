require('dotenv').config()
module.exports = {
  development: {
    // database: 'FAP_deployment',
    database: 'FAP_development',
    dialect: 'postgres'
  },
  test: {
    // database: 'FAP_deployment',
    database: 'FAP_development',
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
