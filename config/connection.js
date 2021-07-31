const Sequelize = require("sequelize");
require("dotenv").config();

let db;

if (process.env.BLOGDB_URL) {
  db = new Sequelize(process.env.BLOGDB_URL);
} else {
  db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = db;
