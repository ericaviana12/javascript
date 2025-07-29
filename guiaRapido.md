# Guia Rápido de JavaScript – Comandos e Descrições

---

## 1. Declaração de Variáveis

- **let**: Declara uma variável com escopo de bloco. Pode ser atualizada, mas não pode ser redeclarada no mesmo escopo.
- **const**: Declara uma constante com escopo de bloco. Valor não pode ser reatribuído.
- **var**: Declara uma variável com escopo de função (ou global). Pode ser redeclarada e atualizada, menos segura.

---

## 2. Tipos de Dados e Conversões

- **typeof**: Retorna o tipo do dado (string, number, boolean, etc).
- **parseInt()**: Converte string para número inteiro.
- **parseFloat()**: Converte string para número decimal.
- **Number()**: Converte valor para número.
- **String()**: Converte valor para string.
- **Boolean()**: Converte valor para booleano (true/false).
- **isNaN()**: Verifica se o valor não é um número válido.

---

## 3. Entrada e Saída de Dados

- **prompt()**: Caixa para entrada de dados pelo usuário.
- **alert()**: Exibe mensagem de alerta.
- **confirm()**: Caixa de confirmação OK/Cancelar.
- **console.log()**: Exibe mensagens no console.
- **console.error()**: Exibe erros no console.
- **console.warn()**: Exibe avisos no console.
- **console.table()**: Exibe dados em tabela no console.

---

## 4. Funções

- **function**: Declara função tradicional.
- **return**: Retorna valor de função.
- **arguments**: Objeto com argumentos passados à função.
- **()=>** (arrow function): Função anônima curta.
- **function\*** (generator function): Função que pode pausar e retomar execução.
- **async function**: Função assíncrona que retorna Promise.
- **await**: Espera resolução de Promise dentro de async.
- **call()**: Chama função com `this` definido e argumentos separados.
- **apply()**: Igual `call()`, mas argumentos em array.
- **bind()**: Cria nova função com `this` fixo.

---

## 5. Estruturas de Controle (Condicionais)

- **if**: Executa bloco se condição verdadeira.
- **else**: Executa bloco se `if` for falso.
- **else if**: Nova condição se `if` falso.
- **switch**: Seleção múltipla baseado em valor.
- **case**: Cada valor comparado no switch.
- **default**: Bloco padrão no switch.
- **?:** (ternário): Atalho para if-else em uma linha.

---

## 6. Estruturas de Repetição (Loops)

- **for**: Loop com contador.
- **while**: Loop enquanto condição verdadeira.
- **do...while**: Loop que executa pelo menos uma vez.
- **for...of**: Loop sobre valores iteráveis.
- **for...in**: Loop sobre propriedades de objeto.
- **break**: Interrompe loop ou switch.
- **continue**: Pula para próxima iteração do loop.

---

## 7. Arrays (Vetores)

- **[]**: Declara array.
- **.length**: Tamanho do array.
- **.push()**: Adiciona elemento no final.
- **.pop()**: Remove último elemento.
- **.shift()**: Remove primeiro elemento.
- **.unshift()**: Adiciona no início.
- **.splice()**: Remove/adiciona elementos em qualquer posição.
- **.slice()**: Cópia parcial do array.
- **.indexOf()**: Índice da primeira ocorrência.
- **.includes()**: Verifica existência de elemento.
- **.concat()**: Junta arrays.
- **.join()**: Converte array em string.
- **.reverse()**: Inverte ordem.
- **.sort()**: Ordena elementos.
- **.map()**: Novo array com função aplicada.
- **.filter()**: Novo array filtrado.
- **.reduce()**: Acumula valores em um só.
- **.forEach()**: Executa função para cada elemento.
- **.find()**: Retorna primeiro elemento que satisfaz condição.
- **.every()**: Verifica se todos satisfazem condição.
- **.some()**: Verifica se algum satisfaz condição.

---

## 8. Objetos

- **{}**: Declara objeto.
- **obj.chave**: Acessa propriedade.
- **obj['chave']**: Acessa propriedade por string.
- **Object.keys()**: Retorna array das chaves.
- **Object.values()**: Retorna array dos valores.
- **Object.entries()**: Retorna array de pares [chave, valor].
- **Object.assign()**: Copia propriedades para um objeto.
- **delete obj.chave**: Remove propriedade.
- **hasOwnProperty()**: Verifica se propriedade pertence ao objeto (não herdada).

---

## 9. Operadores

### Aritméticos

- **+**: Soma.
- **-**: Subtração.
- **\***: Multiplicação.
- **/**: Divisão.
- **%**: Resto da divisão.
- **\*\***: Exponenciação.
- **++**: Incremento.
- **--**: Decremento.

### Comparação

- **==**: Igualdade (valor).
- **===**: Igualdade estrita (valor e tipo).
- **!=**: Diferença (valor).
- **!==**: Diferença estrita.
- **>**: Maior que.
- **<**: Menor que.
- **>=**: Maior ou igual.
- **<=**: Menor ou igual.

### Lógicos

- **&&**: E lógico.
- **||**: Ou lógico.
- **!**: Negação.

### Atribuição

- **=**: Atribuição.
- **+=**: Soma e atribui.
- **-=**: Subtrai e atribui.
- **\*=**: Multiplica e atribui.
- **/=**: Divide e atribui.
- **%=**: Módulo e atribui.

### Outros

- **typeof**: Tipo do operando.
- **instanceof**: Verifica instância.
- **in**: Verifica propriedade em objeto.
- **delete**: Remove propriedade.

---

## 10. Temporizadores e Intervalos

- **setTimeout()**: Executa função após atraso.
- **setInterval()**: Executa função repetidamente.
- **clearTimeout()**: Cancela setTimeout.
- **clearInterval()**: Cancela setInterval.

---

## 11. Math (Matemática)

- **Math.round()**: Arredonda ao inteiro mais próximo.
- **Math.floor()**: Arredonda para baixo.
- **Math.ceil()**: Arredonda para cima.
- **Math.random()**: Número aleatório [0,1).
- **Math.max()**: Maior valor.
- **Math.min()**: Menor valor.
- **Math.sqrt()**: Raiz quadrada.
- **Math.pow()**: Potência.
- **Math.abs()**: Valor absoluto.

---

## 12. Strings

- **.length**: Tamanho da string.
- **.toUpperCase()**: Maiúsculas.
- **.toLowerCase()**: Minúsculas.
- **.charAt()**: Caractere na posição.
- **.indexOf()**: Índice da substring.
- **.includes()**: Contém substring.
- **.replace()**: Substitui parte da string.
- **.substring()**: Parte da string.
- **.slice()**: Parte da string (com índices negativos).
- **.split()**: Divide em array.
- **.trim()**: Remove espaços.
- **.concat()**: Junta strings.

---

## 13. JSON

- **JSON.stringify()**: Converte objeto em string JSON.
- **JSON.parse()**: Converte string JSON em objeto.

---

## 14. Manipulação de Erros

- **try**: Tenta executar código.
- **catch**: Captura erros do try.
- **finally**: Executa sempre após try/catch.
- **throw**: Lança erro manualmente.

---

## 15. Manipulação do DOM

- **document.querySelector()**: Seleciona o primeiro elemento por seletor CSS.
- **document.querySelectorAll()**: Seleciona todos elementos por seletor CSS.
- **document.getElementById()**: Seleciona elemento pelo id.
- **document.getElementsByClassName()**: Seleciona elementos pela classe.
- **document.getElementsByTagName()**: Seleciona elementos pela tag.
- **element.innerHTML**: Conteúdo HTML interno.
- **element.textContent**: Texto interno.
- **element.value**: Valor de input/form.
- **element.classList**: Manipula classes CSS.
- **element.setAttribute()**: Define atributo.
- **element.getAttribute()**: Pega atributo.
- **element.addEventListener()**: Adiciona evento.

---

## 16. Módulos

- **export**: Exporta elementos do módulo.
- **import**: Importa elementos do módulo.
- **default**: Exportação padrão.
- **as**: Renomeia importação/exportação.

---

## 17. Outras Palavras-Chave

- **this**: Referência ao contexto atual.
- **new**: Cria instância de objeto.
- **class**: Declaração de classe.
- **constructor**: Método inicializador da classe.
- **extends**: Herança entre classes.
- **super**: Chama métodos da classe pai.
- **static**: Método/propriedade da classe, não da instância.
- **null**: Valor intencionalmente vazio.
- **undefined**: Valor não atribuído.
- **NaN**: "Not a Number" - resultado inválido.
- **await**: Espera Promise dentro de async.
- **async**: Declara função assíncrona.
- **yield**: Pausa execução de generator function.
