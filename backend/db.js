const mysql = require("mysql2");

const dbConfig = {
  host: process.env.DB_HOST || process.env.MYSQLHOST || "127.0.0.1",
  user: process.env.DB_USER || process.env.MYSQLUSER || "root",
  password: process.env.DB_PASSWORD || process.env.MYSQLPASSWORD || "",
  database:
    process.env.DB_DATABASE ||
    process.env.DB_NAME ||
    process.env.MYSQLDATABASE,
  port:
    Number(
      process.env.DB_PORT ||
        process.env.MYSQLPORT ||
        3306
    ),
};

console.log("HOST:", dbConfig.host);
console.log("USER:", dbConfig.user);
console.log("DATABASE:", dbConfig.database);
console.log("PORT:", dbConfig.port);

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error("DB ERROR:", err);
  } else {
    console.log("✅ Database Connected");
  }
});

module.exports = db;