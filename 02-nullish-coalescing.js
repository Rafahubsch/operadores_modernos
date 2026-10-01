// ===================================================
// 2. NULLISH COALESCING (??)
// Define valor padrao APENAS se for 'null' ou 'undefined'.
// Preserva valores validos como 0, false e string vazia ("").
// ===================================================

console.log("\n=== 2. Nullish Coalescing (??) ===");

// Exemplo 1: Substitui null ou undefined por valor padrao amigavel
const tema = null;
console.log("Tema:", tema ?? "claro"); // "claro"

const telefone = undefined;
console.log("Telefone:", telefone ?? "Nao informado"); // "Nao informado"

// Exemplo 2: Preserva o numero 0, false e "" (string vazia)
const tentativas = 0;
console.log("Tentativas (preserva 0):", tentativas ?? 3); // 0

const apelido = "";
console.log("Apelido (preserva string vazia):", apelido ?? "Visitante"); // ""

const aceitouTermos = false;
console.log("Termos (preserva false):", aceitouTermos ?? true); // false