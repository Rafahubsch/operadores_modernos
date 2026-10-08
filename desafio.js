// Desafio Final
// Mini API em Memória - sem Express
// Combinando métodos de array (map, find, filter, some, every, reduce)

const usuarios = [
  { id: 1, nome: "Ana Silva", idade: 22, ativo: true, cargo: "Desenvolvedora" },
  { id: 2, nome: "Bruno Costa", idade: 17, ativo: true, cargo: "Estagiário" },
  { id: 3, nome: "Carlos Souza", idade: 30, ativo: false, cargo: "Designer" },
  { id: 4, nome: "Diana Lima", idade: 25, ativo: true, cargo: "Tech Lead" },
];

// 1. listarUsuarios() - Use map() para retornar apenas nome e cargo de cada usuário.
function listarUsuarios() {
  return usuarios.map((usuario) => ({
    nome: usuario.nome,
    cargo: usuario.cargo,
  }));
}

// 2. buscarUsuarioPorId(id) - Use find() para buscar um usuário pelo ID informado.
function buscarUsuarioPorId(id) {
  return usuarios.find((usuario) => usuario.id === id);
}

// 3. listarUsuariosAtivos() - Use filter() para retornar apenas os usuários ativos.
function listarUsuariosAtivos() {
  return usuarios.filter((usuario) => usuario.ativo);
}

// 4. existeUsuarioInativo() - Use some() para retornar true se existir pelo menos um usuário inativo.
function existeUsuarioInativo() {
  return usuarios.some((usuario) => !usuario.ativo);
}