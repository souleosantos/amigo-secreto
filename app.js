let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === ''){
        alert('Por favor, insira um nome.');
        return;
    }
    amigos.push(nome);
    input.value = '';
    input.focus();
    atualizarListaVisual();
}

function atualizarListaVisual() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let nome = amigos[i];
        lista.innerHTML += `
            <li>
                ${i + 1}. ${nome}
                <button class="button-remove" onclick="removerAmigo(${i})" aria-label="Remover ${nome}">
                    ❌
                </button>
            </li>
        `;
    }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('A lista está vazia. Adicione pelo menos um nome para sortear.');
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let nomeSorteado = amigos[indiceAleatorio];
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
}

function removerAmigo(i) {

    amigos.splice(i, 1);
    atualizarListaVisual();
    document.getElementById('amigo').focus();
}

function removerAmigo(i) {
    if (confirm(`Tem certeza que deseja remover ${amigos[i]}?`)) {
        amigos.splice(i, 1);
        atualizarListaVisual();
        document.getElementById('amigo').focus();
    }
}





