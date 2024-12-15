const dotenv = require('dotenv');
dotenv.config();

const config = {
    port: parseInt(process.env.PORT),
    mysqlUserName: String(process.env.MYSQL_USERNAME),
    mysqlPassword: String(process.env.MYSQL_PASSWORD),
    projectDatabase: String(process.env.PROJECT_DATABASE)
};

module.exports = config;