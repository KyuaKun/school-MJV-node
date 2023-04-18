import { Request, Response, Router } from "express";
import userService from "../service/";
import { authorizationMiddleware } from "../middleware/auth.middle";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const user = await userService.getAll();
  res.send(user);
});

router.get(
  "/:document",
  authorizationMiddleware,
  async (req: Request, res: Response) => {
    const user = await userService.getByDocument(req.params.document);
    if (!user)
      return res.status(400).send({ message: "Usuário não encontrado." });
    res.status(200).send(user);
  }
);

router.post(
  "/",
  authorizationMiddleware,
  async (req: Request, res: Response) => {
    if (req.body.age < 18) {
      return res.status(400).send({
        message: "Usuário deve ser maior de 18.",
      });
    }
    await userService.create(req.body);
    res.status(201).send({ message: "Usuário criado com sucesso." });
  }
);

router.post("/authorization", async (req: Request, res: Response) => {
  try {
    const token = await userService.authorization(
      req.body.document,
      req.body.password
    );
    res.status(200).send({ token });
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
});

router.delete(
  "/remove/:document",
  authorizationMiddleware,
  async (req: Request, res: Response) => {
    const user = await userService.getByDocument(req.params.document);
    if (!user && user !== null && user !== undefined)
      return res.status(400).send({ message: "Usuário não encontrado." });

    try {
      await userService.remove(req.params.document);
      res.status(200).send({ message: "Usuário removido com sucesso." });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
);

router.put(
  "/:document",
  authorizationMiddleware,
  async (req: Request, res: Response) => {
    const user = await userService.getByDocument(req.params.document);
    if (!user && user !== null && user !== undefined)
      return res.status(400).send({ message: "Usuário não encontrado." });

    try {
      await userService.update(req.params.document, req.body);
      res.status(200).send({ message: "Usuário atualizado com sucesso." });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
);

export default router;
