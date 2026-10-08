// ===================================================
// 5. COMBINANDO ?. E ??
// Exemplo: "const status = usuario?.ativo ?? "Desconhecido""
// Acessa informacoes com seguranca (?.) e define valor padrao (??).
// ===================================================

console.log("\n=== 5. Combinando ?. e ?? ===");

// Exemplo 1: Quando o usuario e undefined
const usuario1 = undefined;
const status1 = usuario1?.ativo ?? "Desconhecido";
console.log("1. Usuario undefined -> Status:", status1); // "Desconhecido"

// Exemplo 2: Quando o usuario existe mas nao possui a propriedade 'ativo'
const usuario2 = { nome: "Lucas" };
const status2 = usuario2?.ativo ?? "Desconhecido";
console.log("2. Sem propriedade ativo -> Status:", status2); // "Desconhecido"

// Exemplo 3: Quando a propriedade ativo e false (preserva false porque nao e nullish!)
const usuario3 = { nome: "Marina", ativo: false };
const status3 = usuario3?.ativo ?? "Desconhecido";
console.log("3. Ativo e false -> Status:", status3); // false

// Exemplo 4: Quando a propriedade ativo e true
const usuario4 = { nome: "Pedro", ativo: true };
const status4 = usuario4?.ativo ?? "Desconhecido";
console.log("4. Ativo e true -> Status:", status4); // true