export const validator = (value, rules) =>{

    let isValid = true;
    let message = '';

    if (rules.required){
        isValid = value.trim() !== '';
        if (!isValid){
            message = 'Este campo é de preenchimento obrigatório';
        }
    }

    if (rules.number){
        let re = /^[0-9]*$/;
        isValid = re.test(value);
        if (!isValid){
            message = 'Este campo permite apenas números';
        }
    }

    if (rules.minLength && isValid) {
        isValid = value.length >= rules.minLength;
        if (!isValid){
            message = 'Tamanho mínimo é de '+ rules.minLength;
        }
    }

    if (rules.maxLength && isValid) {
        isValid = value.length <= rules.maxLength;
        if (!isValid){
            message = 'Tamanho máximo é de '+ rules.maxLength;
        }
    }

    if (rules.isEmail && isValid){
        let re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        isValid = re.test(value);
        if (!isValid){
            message = 'O Email está inválido';
        }

    }

    return {isValid: isValid, message: message};

}