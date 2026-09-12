export function renderHeader() {

    const header = `

        <header class="top">
            <div class="marca">
                <div class="logo">
                    <img src="../assets/imagem/org.png" alt="folha">
                </div>

        <span>Natural Life</span>
            </div>

               <button class="menu-hamburguer" aria-label="Abrir menu">
                 ☰
               </button>

            <nav class="menu">

                <a href="home.html">Home</a>

                <a href="sobre.html">Sobre</a>

                <a href="produtos.html">Produtos</a>

                <a href="login.html">Login</a>

            </nav>

        </header>

    `;

    document.querySelector("#header").innerHTML = header;

    const botaoMenu = document.querySelector(".menu-hamburguer");
    const menu = document.querySelector(".menu");

    botaoMenu.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });

}