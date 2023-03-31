import { Router } from "express";
import healthRouter from "./healthRouter";
import productsRouter from './productsRouter'

const router = Router();

router.use("/", healthRouter);
router.use("/students", productsRouter);

export default router;
