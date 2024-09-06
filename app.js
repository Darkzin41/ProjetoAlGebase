function pesquisar() {
  // Obtém a seção HTML com o ID "pesquisa" para inserir os resultados.
  let section = document.getElementById("pesquisa");

  let campoPesquisa = document.getElementById("input_pesquisa").value;

  if (campoPesquisa === "") {
    section.innerHTML =
      "<h3 id='mensagem-erro'>Nada foi encontrado. Você precisa digitar...</h3>";

    // Muda a cor do texto do H3 para branco
    let mensagemErro = document.getElementById("mensagem-erro");
    mensagemErro.style.color = "white";
    return;
  }

  //iguala a pesquisa com letras minusculas e maiusculas//
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados formatados.
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  for (let dado of dados) {
    // declara titulo e descricao igual a letras minusculas/maiusculas tambem//
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    //se titulo includes campoPesquisa//
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      //cria novo elemento//
      resultados += `
        <div class="cards">
          <h3 class="titulodacaixa"> ${dado.titulo}</h3>
          <p class="informacao">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Saiba Mais</a>
        </div>
      `;
    }
  }

  if (!resultados) {
    resultados = "<h3 id = 'mensagem-erro2'>Nada foi encontrado</h3>";
  }

  // Atribui os resultados formatados ao conteúdo HTML da seção.
  section.innerHTML = resultados;

  // Se a mensagem de erro foi inserida, mude sua cor para branco
  if (!resultados.includes("cards")) {
    let mensagemErro = document.getElementById("mensagem-erro2");
    mensagemErro.style.color = "white";
  }
}
