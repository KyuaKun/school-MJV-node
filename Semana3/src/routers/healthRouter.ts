import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const message = { msg: "Aplicação na rota principal" };
  res.send(message);
});

router.get("/check", (req: Request, res: Response) => {
  const message = { msg: "Aplicação na rota /check" };
  res.send(message);
});

export default router;
