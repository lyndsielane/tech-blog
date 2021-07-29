const Sequilize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.BLOGDB_URL) {
  sequelize = new Sequilize(process.env.BLOGDB_URL);
} else {
  sequelize = new Sequilize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3301,
    }
  );
}
