const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    console.log(nome, email);

    let enviar = {
        nome,
        email,
    }
    let convertEnvio = JSON.stringify(enviar);

    localStorage.setItem('lead', convertEnvio);

    let conteudo = document.getElementById('conteudo');

    let enviando = `<img src="/imagens/loader.gif" alt="Carregando">`

    let enviado = `Formulário enviado com sucesso!`

    conteudo.innerHTML = enviando

    setTimeout(() => {
        conteudo.innerHTML = enviado
    }, 2000)
})