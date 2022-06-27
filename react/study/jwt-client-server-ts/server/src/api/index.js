import { Router } from 'express'
import HomeRoute from './home'

export default () => {
  const router = Router()
  HomeRoute(router)
  return router
}