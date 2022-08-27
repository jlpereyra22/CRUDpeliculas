export function cantidadCaracteres(input){
    if(input.value.trim().length >= 3 && input.value.trim().length <= 150){
        console.log("dato valido");
        input.className = "form-control is-valid";
        return true;
    }else {
        console.log("dato invalido");
        input.className = "form-control is-invalid";
        return false;
    }
}

export function validDescription(input){
    if(input.value.trim().length >= 1 && input.value.trim().length <= 500){
        console.log("dato valido");
        input.className = "form-control is-valid";
        return true;
    }else{
        console.log("dato invalido");
        input.className = "form-control is-invalid"; 
        return false;
    }
}

export function validImagen(input){
    let expReg=/^(ftp|http|https):\/\/[^ "]+$/;
    if(expReg.test(input.value)){
        console.log("link valido");
        input.className = "form-control is-valid";
        return true;
    }else{
        console.log("link invalido");
        input.className = "form-control is-invalid";
        return false;
    }
}

export function validGenero(input){
    if(input.selectIndex != 0){
        console.log("Genero seleccionado")
        input.className = "form-control is-valid";
        return true;
    }else {
        console.log("Identifique el genero");
        return false;
    }
}