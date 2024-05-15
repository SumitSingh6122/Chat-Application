import express from 'express';
import {getMessage, sendMessage } from '../controllers/messagecontroller.js';
import aunthenticated from '../controllers/middleware/aunthenticated.js';
const Router=express.Router();
Router.route('/send/:id').post(aunthenticated,sendMessage);
Router.route('/:id').get(aunthenticated,getMessage);
export default Router;