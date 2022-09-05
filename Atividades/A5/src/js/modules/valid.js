const validations = {
    nome (val) {
        var letters = /^[A-Za-z]+$/;
        if (val.match(letters)) {
            return true;
        }
        else {
            return false;
        }
    },

    cpf (val) {
        var Soma;
        var Resto;
        Soma = 0;
        cpf = val.replace(/[^\d]+/g,'');
        if (cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || 
            cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || 
            cpf == "88888888888" || cpf == "99999999999") 
            return false;

        for (i = 1; i <= 9; i++) 
            Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);

        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(cpf.substring(9, 10)) ) return false;

        Soma = 0;
        for (i = 1; i <= 10; i++) 
            Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
        return true;
    },

    date (val) {
        // https://www.w3resource.com/javascript/form/javascript-date-validation.php

        var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        
        if (val.match(dateformat)) {
            var pdate = val.split('/');
            let d = parseInt(pdate[0]);
            let m = parseInt(pdate[1]);
            let y = parseInt(pdate[2]);

            var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (m == 1 || m > 2) {
                if (d > ListofDays[m - 1]) {
                    return false;
                }
            }
            if (m == 2) {
                var lyear = false;
                if ((!(y % 4) && y % 100) || !(y % 400)) {
                    lyear = true;
                }
                if ((lyear == false) && (d >= 29)) {
                    return false;
                }
                if ((lyear == true) && (d > 29)) {
                    return false;
                }
            }
        }
        else {
            return false;
        }
    },

    email (val) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (val.match(mailformat)) {
            return true;
        }
        else {
            return false;
        }
    },

    fone (val) {
        const len = val.replace(/\D/g, '').length;
        if ((len == 10) || (len == 11)) {
            return true;
        }
        else {
            return false;
        }
    },

    cep (val) {
        const len = val.replace(/\D/g, '').length;
        if (len == 8) {
            return true;
        }
        else {
            return false;
        }
    }
}
