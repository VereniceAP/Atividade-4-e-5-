import { buscarCep } from "./service/viaCep.js";

const campoCep = document.querySelector("#cep");

const campoLogradouro = document.querySelector("#logradouro");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const campoUf = document.querySelector("#uf");

if (campoCep) {

    campoCep.addEventListener("blur", async () => {

        try {

            const dados = await buscarCep(campoCep.value);

            campoLogradouro.value = dados.logradouro;
            campoBairro.value = dados.bairro;
            campoCidade.value = dados.localidade;
            campoUf.value = dados.uf;

        } catch (erro) {

            alert(erro.message);

        }

    });

}