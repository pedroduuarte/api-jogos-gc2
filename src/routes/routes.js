import Router from 'express';

const jogosRouter = Router();

jogosRouter.get('/jogos', getJogos);

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

export default jogosRouter;