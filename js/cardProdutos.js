export function criarCardProduto(produto) {

    return `
        <article class="card-produto">

            <img 
                src="${produto.imagem}" 
                alt="${produto.nome}"
                class="imagem-produto"
            >

            <div class="card-conteudo">

                <span class="categoria">
                    ${produto.categoria}
                </span>

                <h2>${produto.nome}</h2>

                <p>${produto.descricao}</p>

                <strong>
                    R$ ${produto.preco.toFixed(2).replace(".", ",")}
                </strong>

            </div>

        </article>
    `;
}