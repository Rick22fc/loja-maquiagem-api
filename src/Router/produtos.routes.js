import { Router } from 'express';
import { produtosService } from '../Service/produto.services.js';

export const router = Router();

router.get("/produto", async (req,res)=>{
    const produto = await produtosService.getALL()
    return res.status(200).json(produto)
})
router.post("/produto", async(req,res)=>{
    const produto = await produtosService.create(req.body)
    return res.status(201).json(produto)
});