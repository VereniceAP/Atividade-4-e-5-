import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";
import "./cadastro.js";
import { criarCardProduto } from "./cardProdutos.js";
import { produtos } from "./Data/produtos.js";


renderHeader();
renderFooter();


function renderProdutos() {

    const lista = document.querySelector("#lista-produtos");

    if (!lista) return;

    lista.innerHTML = produtos
        .map(produto => criarCardProduto(produto))
        .join("");
}


renderProdutos();