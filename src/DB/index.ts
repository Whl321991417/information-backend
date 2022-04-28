
import mysql from 'mysql';
const pool = mysql.createPool({
    connectionLimit: 10,
    host: '175.178.0.47',
    port: 3306,
    user: 'wanghaole',
    password: 'wanghaole',
    database: 'campusinfo'
});

// 导出 配置好的 连接池对象！
export default pool
