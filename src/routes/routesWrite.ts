import express from "express";
import { write } from '../api/controllers';

const router = express.Router();

router.get('/', write);

export default router;
