import express from 'express'
const router = express.Router();

// controlles
import { store } from '../controllers/User'



router.post('/create', store);





export default router;
