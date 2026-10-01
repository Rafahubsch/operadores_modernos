// ===================================================
// 1. OPTIONAL CHAINING (?.)
// Evita erro (TypeError) ao acessar propriedades inexistentes.
// Retorna 'undefined' com seguranca em vez de quebrar o programa.
// ===================================================

console.log("\n=== 1. Optional Chaining (?.) ===");

// Exemplo 1: Sem o operador ?., acessar propriedade de undefined gera erro
const alunoSemEndereco = { nome: "Bruno" };

// Tentar: alunoSemEndereco.endereco.cidade causaria TypeError.
// Com ?., o acesso e seguro e retorna apenas 'undefined':
console.log("Cidade de Bruno (seguro com ?.):", alunoSemEndereco.endereco?.cidade);

// Exemplo 2: Quando a propriedade existe, acessa normalmente
const alunoComEndereco = {
  nome: "Ana",
  endereco: { cidade: "Sao Paulo" }
};
console.log("Cidade de Ana:", alunoComEndereco.endereco?.cidade);

// Exemplo 3: Uso seguro com Arrays
const usuarios = [{ nome: "Carla" }];
const usuariosVazios = [];

console.log("Primeiro da lista:", usuarios[0]?.nome); // "Carla"
console.log("Primeiro da lista vazia:", usuariosVazios[0]?.nome);
// undefined (sem travar)
























































































