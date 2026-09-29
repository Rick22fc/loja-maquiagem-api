import express from 'express';
import { router } from './Router/produtos.routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/produto', router)
app.listen(port, () =>{
    console.log(`API rodando em: http://localhost:${port}`)
});
