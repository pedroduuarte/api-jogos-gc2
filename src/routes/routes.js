import Router from 'express';

const jogosRouter = Router();

jogosRouter.get('/jogos', getJogos);
jogosRouter.post('/jogos', postJogos);
jogosRouter.delete('/jogos/:id', deleteJogos);

let jogos = [
    {
        id: 1,
        nome: 'The Legend of Zelda: Breath of the Wild',
        plataforma: 'Nintendo Switch',
        genero: 'Ação-aventura',
        ano: 2017
    }, 
    {
        id: 2,
        nome: 'God of War',
        plataforma: 'PlayStation 4',
        genero: 'Ação-aventura',
        ano: 2018
    },
    {
        id: 3,
        nome: 'Red Dead Redemption 2',
        plataforma: 'PlayStation 4, Xbox One, PC',
        genero: 'Ação-aventura',
        ano: 2018
    },
    {
        id: 4,
        nome: 'GTA V',
        plataforma: 'PlayStation 3, PlayStation 4, Xbox 360, Xbox One, PC',
        genero: 'Ação-aventura',
        ano: 2013
    }
]

function getJogos(req, res) {
    return res.status(200).json(jogos);
}

function postJogos(req, res) {
    const { nome, plataforma, genero, ano } = req.body;

    const novoJogo = {
        id: jogos.length + 1,
        nome,
        plataforma,
        genero,
        ano
    };

    jogos.push(novoJogo);
    return res.status(201).json(novoJogo);
}

function deleteJogos(req, res) {
    const { id } = req.params;
    const jogoIndex = jogos.findIndex(jogo => jogo.id === parseInt(id));


    if (jogoIndex === -1) {
        return res.status(404).json({ message: 'Jogo não encontrado' });
    }

    jogos.splice(jogoIndex, 1);
    return res.status(204).json({ message: 'Jogo removido com sucesso' });
}

export default jogosRouter;