export const dataCovid = {

    async getData(uf) {
        try {
            const response = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`, { mode: 'cors' });
            const data = await response.json();
            console.log(data);

            var date = new Date(data.datetime)
            date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
            document.getElementById('state').innerHTML = `${data.state} (${data.uf}) – ${date}`
            document.getElementById('suspects').innerHTML = this.formatNumber(data.suspects)
            document.getElementById('cases').innerHTML = this.formatNumber(data.cases)
            document.getElementById('deaths').innerHTML = this.formatNumber(data.deaths)
        } catch (err) {
            console.log("Via CEP " + err)
        }
    },

    formatNumber(value) {
        value = value.toLocaleString('pt-BR')
        return `${value}`
    }
}