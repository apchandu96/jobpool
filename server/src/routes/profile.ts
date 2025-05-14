import { Router } from 'express'
import { createProfile, getProfiles, getProfile } from '../controllers/profile'

const router = Router()

router.post('/', createProfile)
router.get('/', getProfiles)
router.get('/:id', getProfile)

export default router
