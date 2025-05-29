function atualizarConteudo(paragrafo) {
    var textoParagrafo = paragrafo.textContent;

    var titulo1 = document.getElementById("titulo1");
    var data1 = document.getElementById("data1");
    var titulo2 = document.getElementById("titulo2");
    var descricao = document.getElementById("descricao");

    switch (textoParagrafo) {
      case "Marketing 365":
        titulo1.textContent = "Desenvolvimento Wordpress";
        data1.textContent = "Nov 2020 - Jun 2021";
        titulo2.textContent = "Marketing 365";
        descricao.textContent =
          "Primeira empresa onde trabalhei como desenvolvedor de sites e landing pages em Wordpress. Foi onde tive meu primeiro contato profissional com algo que futuramente iria me levar até o desenvolvimento Front End.";
        break;
      case "Lead Masters":
        titulo1.textContent = "Desenvolvimento Wordpress";
        data1.textContent = "Jun 2021 - Jan 2022";
        titulo2.textContent = "Lead Masters";
        descricao.textContent =
          "Empresa onde novamente tive um contato com o Wordpress, dessa vez mais aprofundado, mas onde também tinha o trabalho de desenvolver sites e landing pages. Também tive a oportunidade de conhecer o básico de edição de vídeos no Adobe Premiere e After Effects.";
        break;
      case "Superticket":
        titulo1.textContent = "Análise de Antifraude";
        data1.textContent = "Mai 2022 - Abr 2023";
        titulo2.textContent = "Superticket";
        descricao.textContent =
          "Trabalho onde fugi um pouco do desenvolvimento e trabalhei um pouco com análise de antifraude por 1 ano. Empresa onde pude ter uma boa evolução no meu lado profissional por ser uma empresa que estava em constante crescimento e precisava estar sempre por dentro de todas as demandas.";
        break;
      case "ArcelorMittal":
        titulo1.textContent = "Desenvolvimento Front End";
        data1.textContent = "Jun 2023 - Dez 2024";
        titulo2.textContent = "ArcelorMittal";
        descricao.textContent =
          "Primeira oportunidade de trabalhar em uma emrpresa multinacional onde atuei como estágiário de Front End com foco em Angular por 1 ano e meio. Empresa onde aprendi ainda mais sobre ferramentas essenciais para um desenvolvedor, ferramentas que uso diariamente para projetos pessoais e profissionais.";
        break;
      case "(Certificados)":
        titulo1.textContent = "Certificados online";
        data1.textContent = "-";
        titulo2.textContent = "Alura";
        var link = document.createElement('a');
        link.href = "https://cursos.alura.com.br/user/hkvm2000/fullCertificate/fdb687f61bd3b3c8debe29c299941022";
        link.textContent = " Acesse os certificados";
        link.target = "_blank";

        var descricaoTexto = document.createTextNode("Link de todos os certificados de cursos que já completei na plataforma Alura, visando evoluir minhas habilidades na programação Front End. Visualize todos os certificados no link a seguir.");
        
        descricao.innerHTML = '';
        descricao.appendChild(descricaoTexto);
        descricao.appendChild(link);
        break;
      default:
        break;
    }
  }

const links = document.querySelectorAll(".link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    // Atualiza classe ativa
    links.forEach((l) => l.querySelector("p").classList.remove("active-place"));
    link.querySelector("p").classList.add("active-place");

    // Atualiza conteúdo
    const paragrafo = link.querySelector("p");
    if (paragrafo) {
      atualizarConteudo(paragrafo);
    }
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    var paragrafoMarketing365 = document.querySelector("#marketing365 p");
    if (paragrafoMarketing365) {
      paragrafoMarketing365.click();
    }
  });