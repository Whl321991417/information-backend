
import express from 'express';
import bodyParser from 'body-parser'
import { asClass, createContainer } from 'awilix'
import { loadControllers, scopePerRequest } from 'awilix-express'
import { UserService } from './services/UserService'
import { LoginService } from './services/LoginService'
import cors from 'cors'
const app = express()
const container = createContainer()
    .register({
        userService: asClass(UserService),
        loginService: asClass(LoginService)
    })
app.use(cors()) // 通过中间件的方式使用cors插件 解决跨域问题
app.use(bodyParser.json())
app.use(scopePerRequest(container))
const jwt = require('express-jwt');
app.use(jwt({ secret: 'abc_dx_1008', algorithms: ['HS256'] }).unless({ path: ['/api/login'] }))

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