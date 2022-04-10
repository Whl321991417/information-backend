import getConfig from './config'
const config = getConfig()
const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: config.port,
    user: config.userName,
    password: config.password,
    database: 'campusinfo'
});

// 导出 配置好的 连接池对象！
export default pool