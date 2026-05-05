const express = require('express');
const router = express.Router();

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
];

router.get('/jogos', (req, res) => {
    return res.status(200).json(jogos);
});

router.post('/jogos', (req, res) => {
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
});

router.delete('/jogos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ message: 'ID inválido' });
    }

    const jogoIndex = jogos.findIndex(jogo => jogo.id === id);

    if (jogoIndex === -1) {
        return res.status(404).json({ message: 'Jogo não encontrado' });
    }

    jogos.splice(jogoIndex, 1);

    return res.status(204).send(); // 
});

module.exports = router;