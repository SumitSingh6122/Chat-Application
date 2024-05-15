import express from 'express';
import { Login, Register, logout, otheruser } from '../controllers/usercontroller.js';
import aunthenticated from '../controllers/middleware/aunthenticated.js';
const router=express.Router();
router.route('/register').post(Register);
router.route('/login').post(Login);
router.route('/logout').get(logout);
router.route('/').get(aunthenticated,otheruser);
export default router;