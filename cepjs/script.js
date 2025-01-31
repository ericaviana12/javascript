function buscarEndereco() {
    let cep = document.getElementById('cep').value
    let urlAPI = `https://viacep.com.br/ws/${cep}/json/`

    fetch(urlAPI)
        .then(response => response.json())
        .then(dados => {
            document.getElementById('logradouro').value = dados.logradouro
            document.getElementById('bairro').value = dados.bairro
            document.getElementById('cidade').value = dados.localidade
            document.getElementById('uf').value = dados.uf;
        })
        .catch(error => console.error('Erro ao buscar o endereço:', error));
}

function mascaraTelefone(input) {
    // Remove tudo o que não for número
    let valor = input.value.replace(/\D/g, '');

    // Aplica a máscara (DDD)XXXXX-XXXX
    if (valor.length <= 2) {
        input.value = `(${valor}`;
    } else if (valor.length <= 6) {
        input.value = `(${valor.substring(0, 2)}) ${valor.substring(2)}`;
    } else {
        input.value = `(${valor.substring(0, 2)}) ${valor.substring(2, 7)}-${valor.substring(7, 11)}`;
    }
}

function preencherUF(uf) {
    const selectUF = document.getElementById('uf');
    selectUF.value = uf;  // Aqui você passa a UF que deseja preencher
}

// Exemplo de preenchimento automático, com uma UF específica
window.onload = function () {
    // Preenchendo a UF automaticamente (exemplo: 'SP' para São Paulo)
    preencherUF('SP');
}