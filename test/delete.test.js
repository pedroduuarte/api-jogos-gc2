const request = require('supertest');
const app = require('../src/app');

describe('DELETE /jogos', () => {

  test('Deve deletar um jogo existente', async () => {
    const response = await request(app)
      .delete('/api/v1/jogos/1');

    expect(response.status).toBe(204);
  });

  test('Deve retornar erro ao deletar jogo inexistente', async () => {
    const response = await request(app)
      .delete('/api/v1/jogos/999');

    expect(response.status).toBe(404);
  });

  test('Deve retornar erro ao enviar ID inválido', async () => {
    const response = await request(app)
      .delete('/api/v1/jogos/abc');

    expect([400, 404]).toContain(response.status);
  });

  test('Após deletar, o jogo não deve mais existir', async () => {
    await request(app).delete('/api/v1/jogos/2');

    const response = await request(app)
      .delete('/api/v1/jogos/2');

    expect(response.status).toBe(404);
  });

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

});