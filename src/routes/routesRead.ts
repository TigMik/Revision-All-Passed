import express from "express";
import { read } from '../api/controllers';


const router = express.Router();

router.get('/', read);

export default router;
