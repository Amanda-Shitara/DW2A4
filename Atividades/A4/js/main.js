import { dataCovid } from './modules/covidApi.js';
import { mask } from './modules/mask.js';
import { validations } from './modules/valid.js';

const $campoCEP = document.querySelector('[name="cep"]')
const button = document.getElementById('search')
let previousCEP = '';

$campoCEP.addEventListener('input', async (e) => {
    e.target.value = mask.cep(e.target.value)
}, false);

button.addEventListener('click', async (e) => {
    console.log(e)

    e.preventDefault();

    const uf = await validations.getState();
    console.log(uf)

    if(!uf) {
        alert('Erro! CEP Inválido!')
        $campoCEP.value = previousCEP
    }
    else {
        dataCovid.getData(uf)
        document.querySelector('.results').classList.add('active')
        previousCEP = $campoCEP.value
    }
});