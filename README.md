## O desafio

É um desafio de codificação front-end proposta pelo [Frontend Mentor](https://www.frontendmentor.io), no qual é necessário construir esta seção de comentários interativa e fazê-la parecer o mais próximo possível do design.

Foi fornecido os dados em um arquivo local `data.json`, para obter os dados e preencher o conteúdo no primeiro carregamento.

Os usuários devem ser capazes de:

- Visualizar o layout ideal para o aplicativo, dependendo do tamanho da tela do dispositivo
- Veja os estados de foco para todos os elementos interativos na página
- Criar, ler, atualizar e excluir comentários e respostas
- Comentários de upvote e downvote

### Comportamento esperado

- Os comentários de primeiro nível devem ser ordenados por sua pontuação, enquanto as respostas aninhadas são ordenadas por tempo de adição.
- Responder a um comentário adiciona a nova resposta à parte inferior das respostas aninhadas nesse comentário.
- Uma confirmação modal deve aparecer antes que um comentário ou resposta seja excluído.
- Adicionar um novo comentário ou resposta usa o objeto `currentUser` de dentro do arquivo `data.json`.
- O usuário só pode editar ou excluir seus próprios comentários e respostas.