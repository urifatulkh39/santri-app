const mysql = require("mysql2");

console.log("HOST:", process.env.DB_HOST);
console.log("USER:", process.env.DB_USER);
console.log("DATABASE:", process.env.DB_DATABASE);
console.log("PORT:", process.env.DB_PORT);

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if (err) {
        console.error("DB ERROR:", err);
    } else {
        console.log("Database Connected");
    }
});

module.exports = db;