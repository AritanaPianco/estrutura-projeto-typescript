import express from 'express'
const router = express.Router();

// controlles
import { index } from '../controllers/Home'



router.get('/', index);





export default router;
