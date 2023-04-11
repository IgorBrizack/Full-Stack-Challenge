import 'dotenv/config'

const mongoose = require('mongoose')

const LOGIN = process.env.MONGO_USERNAME
const PASSWORD = process.env.MONGO_PASSWORD

const MONGODB_DSN = `mongodb://${LOGIN}:${PASSWORD}@localhost:27017`