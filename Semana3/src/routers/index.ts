import { Router } from "express";
import healthRouter from "./healthRouter";
import studentsRouter from './studentsRouter'

const router = Router();

router.use("/health", healthRouter);
router.use("/students", studentsRouter);

export default router;
