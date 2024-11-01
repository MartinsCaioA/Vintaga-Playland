import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import router from './routes'


const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(500).json({ 
            message: err.message 
        })
    }
    return res.status(500).json({
        status: 'Erro',
        message: 'Erro Interno Servidor'
    })
})

app.listen(3333, () => console.log('Servidor On Line na Porta 3333'))
