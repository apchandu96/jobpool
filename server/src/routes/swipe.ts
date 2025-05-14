import { Router } from 'express'
import { swipe } from '../controllers/swipe'

const router = Router()

router.post('/', swipe)

export default router
