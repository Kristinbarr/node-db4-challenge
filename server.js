const express = require('express')
const recipesRouter = require('./recipes-router')
const server = express()

const helmet = require('helmet')

server.use(helmet())
server.use(express.json())

server.use('/api', recipesRouter)

module.exports = server