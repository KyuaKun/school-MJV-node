import { Request, Response, Router } from "express";
import productsService from "../service/products.service";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const products = await productsService.getAll();
  res.send(products);
});

router.post("/", async (req: Request, res: Response) => {
  await productsService.create(req.body);
  res.status(201).send({ message: "Produto registrado com sucesso." });
});

router.delete("/remove/:id", async (req: Request, res: Response) => {
  try {
    await productsService.remove(req.params.id);
    res.status(200).send({ message: "Produto removido com sucesso." });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    await productsService.update(req.params.id, req.body);
    res.status(200).send({ message: "Produto alterado com sucesso." });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

export default router;
