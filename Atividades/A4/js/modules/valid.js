export const validations = {

    async getState() {
        let cep = document.querySelector('[name="cep"]').value;
        cep = cep.replace(/\D/g, '');

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, { mode: 'cors' });
            const data = await response.json();
            console.log(data);
            return data.uf;
        } catch (err) {
            return false;
        }
    }
}