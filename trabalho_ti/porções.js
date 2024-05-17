// Definindo um objeto para representar uma receita
const receita = {
  nome: "Bolo de Chocolate",
  tempoDeDuracao: "1 hora",
  categorias: {
      porcao: true,
      sobremesa: true,
      dieta: false,
      refeicao: false,
      vegetariana: false,
      vegana: false
  },
  imagem: "https://exemplo.com/imagem.jpg" // URL da imagem da receita
};

// Exibindo informações sobre a receita
console.log("Nome da receita: " + receita.nome);
console.log("Tempo de duração: " + receita.tempoDeDuracao);

// Verificando as categorias da receita
console.log("Categorias:");
console.log("Porção: " + (receita.categorias.porcao ? "Sim" : "Não"));
console.log("Sobremesa: " + (receita.categorias.sobremesa ? "Sim" : "Não"));
console.log("Dieta: " + (receita.categorias.dieta ? "Sim" : "Não"));
console.log("Refeição: " + (receita.categorias.refeicao ? "Sim" : "Não"));
console.log("Vegetariana: " + (receita.categorias.vegetariana ? "Sim" : "Não"));
console.log("Vegana: " + (receita.categorias.vegana ? "Sim" : "Não"));

// Exibindo a URL da imagem da receita
console.log("Imagem da receita: " + receita.imagem);