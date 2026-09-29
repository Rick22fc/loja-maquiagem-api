import {pool} from "../Database/db.js";

class ProdutosService{
    async getALL(){
        const res = await pool.query("SELECT * FROM produto RETURNING");
        return res.rows

    }
    async create(nome,marca,categaria,preco,quantidade_estoque){
        const res =await pool.query("INSERT INTO produto VALUES($1, 2$, 3$, 4$, 5$) RETURNING",
            [nome,marca,categaria,preco,quantidade_estoque]);
            return res.rows[0];

    }

}

export const produtosService = new ProdutosService()