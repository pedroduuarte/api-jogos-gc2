const API_URL = 'http://localhost:3000';

describe('DELETE /jogos', () => {

  test('Deve deletar um jogo existente', async () => {
    const response = await fetch(`${API_URL}/api/v1/jogos/1`, {
      method: 'DELETE'
    });

    expect(response.status).toBe(204);
  });

  test('Deve retornar erro ao deletar jogo inexistente', async () => {
    const response = await fetch(`${API_URL}/api/v1/jogos/999`, {
      method: 'DELETE'
    });

    expect(response.status).toBe(404);
  });
  
  test('teste básico', () => {
    expect(1).toBe(1);
    });

});