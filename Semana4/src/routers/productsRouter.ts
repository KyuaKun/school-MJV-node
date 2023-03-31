import { Request, Response, Router } from "express";
import ProductService from "../service/products.service";

const router = Router();

router.get("/index", (_req: Request, res: Response) => {
  const response = ProductService.index();
  return res.status(200).send(response);
});

router.get("/read/:id", (req: Request, res: Response) => {
  const document = ProductService.read(req.params.id);

  if (!document) {
    return res.status(400).send({ message: "Nenhum produto encontrado" });
  }

  return res.status(200).send(document);
});

router.post("/store", (req: Request, res: Response) => {
  ProductService.store(req.body);
  return res.status(201).send({ message: "Produto criado" });
});

router.delete("/remove/:id", (req: Request, res: Response) => {
  try {
    ProductService.destroy(req.params.id);
    return res.status(200).send({ message: "Produto excluído" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

router.put("/update/:id", (req: Request, res: Response) => {
  try {
    ProductService.update(req.params.id, req.body);
    return res.status(200).send({ message: "Procuto atualizado." });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

export default router;
