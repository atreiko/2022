import { Router } from 'express'
import { IndexController } from './index.controller'

const route = Router()

export default function(root) {
  root.use('/', route)
  route.get('/', IndexController)
  route.post('/signup')
  route.post('signin')
  route.post('/signout')
  route.get('activate/:link')
  route.get('/refresh')
  route.get('/users')
}