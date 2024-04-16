// Importe o módulo http
const http = require('http');

// Defina o número da porta em que o servidor irá ouvir
const PORT = 3000;

// Crie uma função de callback para lidar com as requisições do cliente
const requestHandler = (req, res) => {
  // Defina o cabeçalho de resposta com o código de status 200 e o tipo de conteúdo como texto/plain
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Escreva uma mensagem de resposta
  res.end('Hello, World!');
};

// Crie o servidor passando a função de callback como argumento
const server = http.createServer(requestHandler);

// Inicie o servidor e faça-o escutar na porta especificada
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
  console.log("raphael do chapeu")