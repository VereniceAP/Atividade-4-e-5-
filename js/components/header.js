
export function renderHeader() {

    const header = `

        <header>

            <nav class="menu">

                <a href="home.html">Home</a>

                <a href="sobre.html">Sobre</a>

                <a href="login.html">Login</a>

            </nav>

        </header>

    `;

    document.querySelector("#header").innerHTML = header;

}