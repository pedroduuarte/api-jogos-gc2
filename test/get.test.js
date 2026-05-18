const request = require('supertest');
const app = require('../src/app');

describe('GET /jogos', () => {

  test('Deve retornar a lista de jogos', async () => {
    const response = await request(app)
      .get('/api/v1/jogos');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('Deve retornar jogos com as propriedades corretas', async () => {
    const response = await request(app)
      .get('/api/v1/jogos');

    expect(response.status).toBe(200);

    const jogo = response.body[0];
    expect(jogo).toHaveProperty('id');
    expect(jogo).toHaveProperty('nome');
    expect(jogo).toHaveProperty('plataforma');
    expect(jogo).toHaveProperty('genero');
    expect(jogo).toHaveProperty('ano');
  });

  test('Deve retornar pelo menos um jogo', async () => {
    const response = await request(app)
      .get('/api/v1/jogos');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

});
