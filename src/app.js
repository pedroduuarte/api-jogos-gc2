import express from 'express';
import jogosRouter from './routes/routes.js';

const app = express();

app.use(express.json());
app.use('/api/v1', jogosRouter);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

