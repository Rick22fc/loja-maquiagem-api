import {Router} from 'express';
import { produtosService } from '../Service/produto.services.js';

export const router = Router();

router.get("/", async (req,res)=>{
    const produto = await produtosService.getALL()
    return res.status(200).json(produto)
})
router.post("/", async(req,res)=>{
    const produto = await produtosService.create({
        nome:"Rímel",
        marca:"Vizzela",
        categoria:"Maquiagem",
        preco:100.99,
        quantidade_estoque:20
    })
    return res.status(201).json(produto)

}


)