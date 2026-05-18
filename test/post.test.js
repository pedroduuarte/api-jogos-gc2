const request = require('supertest');
const app = require('../src/app');

describe('POST /jogos', () => {

  test('Deve criar um novo jogo', async () => {
    const response = await request(app)
      .post('/api/v1/jogos')
      .send({
        nome: 'Teste',
        plataforma: 'PC',
        genero: 'Ação',
        ano: 2025
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  test('Deve retornar o jogo criado com os dados corretos', async () => {
    const novoJogo = {
      nome: 'Minecraft',
      plataforma: 'PC, Xbox, PlayStation',
      genero: 'Sandbox',
      ano: 2011
    };

    const response = await request(app)
      .post('/api/v1/jogos')
      .send(novoJogo);

    expect(response.status).toBe(201);
    expect(response.body.nome).toBe(novoJogo.nome);
    expect(response.body.plataforma).toBe(novoJogo.plataforma);
    expect(response.body.genero).toBe(novoJogo.genero);
    expect(response.body.ano).toBe(novoJogo.ano);
  });

});
