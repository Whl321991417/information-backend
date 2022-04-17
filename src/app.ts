
import express from 'express';
import bodyParser from 'body-parser'
import { asClass, createContainer } from 'awilix'
import { loadControllers, scopePerRequest } from 'awilix-express'
import { UserService } from './services/UserService'
import { LoginService } from './services/LoginService'
import cors from 'cors'
import { DormitoryService } from './services/DormitoryService';
import { swagger } from './utils/swagger';
import jwt from 'express-jwt';

const app = express()
const container = createContainer()
    .register({
        userService: asClass(UserService),
        loginService: asClass(LoginService),
        dormitoryService: asClass(DormitoryService),
    })
app.use(cors()) // 通过中间件的方式使用cors插件 解决跨域问题
app.use(bodyParser.json())
app.use(scopePerRequest(container))
// 使用swagger API 文档
swagger(app)

app.use(jwt({ secret: 'abc_dx_1008', algorithms: ['HS256'] }).unless({ path: ['/api/login','/swagger'] }))
let controllerUrl;
if (process.env.NODE_ENV == 'production') {
    controllerUrl = 'controllers/*.js'
} else {
    controllerUrl = 'controllers/*.ts'
}
app.use(loadControllers(controllerUrl, { cwd: __dirname }))
app.listen(8000, () => {
    console.log("启动成功：8000");
})