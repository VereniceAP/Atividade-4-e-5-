export async function buscarCep(cep) {

    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
        throw new Error("CEP inválido");
    }

    const response = await fetch(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
    );

    if (!response.ok) {
        throw new Error("Erro ao consultar o CEP");
    }

    const dados = await response.json();

    if (dados.erro) {
        throw new Error("CEP não encontrado");
    }

    return dados;
}