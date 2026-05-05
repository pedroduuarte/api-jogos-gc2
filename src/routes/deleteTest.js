const API_URL = 'http://localhost:3000';

async function testDeleteJogos() {
    console.log('Iniciando testes da rota DELETE...\n');

    try {
        console.log('Teste 1: Deletar um jogo existente (ID 1)');
        const response1 = await fetch(`${API_URL}/jogos/1`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(`Status: ${response1.status}`);
        const data1 = await response1.json();
        console.log(`Resposta: ${JSON.stringify(data1)}\n`);

        console.log('Teste 2: Tentar deletar um jogo que não existe (ID 999)');
        const response2 = await fetch(`${API_URL}/jogos/999`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(`Status: ${response2.status}`);
        const data2 = await response2.json();
        console.log(`Resposta: ${JSON.stringify(data2)}\n`);

        console.log('Teste 3: Listar todos os jogos após deleção');
        const response3 = await fetch(`${API_URL}/jogos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(`Status: ${response3.status}`);
        const data3 = await response3.json();
        console.log(`Quantidade de jogos: ${data3.length}`);
        console.log(`Jogos: ${JSON.stringify(data3, null, 2)}\n`);

        console.log('Testes concluídos!');
    } catch (erro) {
        console.error('Erro durante os testes:', erro.message);
    }
}

testDeleteJogos();