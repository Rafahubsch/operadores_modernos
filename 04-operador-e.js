// ===================================================
// 4. OPERADOR E / AND (&&) - SHORT-CIRCUIT
// Executa o lado direito APENAS se o lado esquerdo for verdadeiro (truthy).
// ===================================================

console.log("\n=== 4. Operador AND (&&) ===");

function enviarNotificacao(nome) {
  console.log(`Notificacao enviada para ${nome}.`);
}

const usuarioAtivo = true;
const usuarioInativo = false;

// Exemplo 1: Como usuarioAtivo e true, executa a acao a direita
usuarioAtivo && enviarNotificacao("Davi");

// Exemplo 2: Como usuarioInativo e false, o JS para aqui e NAO executa
usuarioInativo && enviarNotificacao("Elisa");

// Exemplo 3: && vs IF tradicional
// O && e direto para acoes simples de 1 linha.
// Para logicas maiores ou mais complexas, o IF tradicional e mais legivel:
if (usuarioAtivo) {
  console.log("Com IF: mais claro para fluxos maiores de codigo.");
}