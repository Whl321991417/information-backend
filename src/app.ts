
import express = require('express');
import bodyParser = require('body-parser')
import { asClass, createContainer } from 'awilix'
import { loadControllers, scopePerRequest } from 'awilix-express'
import { UserService } from './Services/userService'

const app = express()
const container = createContainer()
    .register({
        userService: asClass(UserService) 
    })


app.use(bodyParser.json())
app.use(scopePerRequest(container))

app.use(loadControllers('Controller/*.ts', { cwd: __dirname }))

app.listen(3000)