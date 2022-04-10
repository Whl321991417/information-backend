
interface DbConfig {
    userName?: string,
    password?: string,
    port?: number,
    database: string
}
export default () => {
    const config: DbConfig = {
        userName: "wangbo",
        password: '123456',
        port: 3306,
        database: "campusinfo"
    }
    if (process.env.NODE_ENV == 'production') {
        config.userName = 'wanghaole';
        config.password = 'wanghaole'
    }
    return config
}