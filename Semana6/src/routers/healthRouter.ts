import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  const message = { msg: "Aplicação online" };
  res.send(message);
});

export default router;
