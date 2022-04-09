
import express from 'express';
import bodyParser from 'body-parser'
import { asClass, createContainer } from 'awilix'
import { loadControllers, scopePerRequest } from 'awilix-express'
import { UserService } from './Services/UserService'


const app = express()
const container = createContainer()
    .register({
        userService: asClass(UserService)
    })


app.use(bodyParser.json())
app.use(scopePerRequest(container))
let controllerUrl;
if (process.env.NODE_ENV == 'production') {
    controllerUrl = 'Controller/*.js'
} else {
    controllerUrl = 'Controller/*.ts'
}
app.use(loadControllers(controllerUrl, { cwd: __dirname }))
app.listen(3000, () => {
    console.log("启动成功：3000");
})