import express from 'express'
import { router } from '../routes/produtos.routes.js'

const app = express()
const port = 3000

app.use(express.json());
app.get('/produto', router)
app.listen(port, () =>{
    console.log(`API rodando em: http://localhost:3000${port}`)
})
