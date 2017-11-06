const mysql = require('mysql')
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'website',
  supportBigNumbers: true,
  bigNumberStrings: true,
  charset: 'utf8mb4',
  debug: false
})

module.exports = pool
