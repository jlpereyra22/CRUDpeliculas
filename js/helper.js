export function cantidadCaracteres(input){
    if(input.value.trim().length >= 3 || input.value.trim().lenght <= 150){
        console.log("dato valido");
        input.className = "form-control is-valid";
        return true;
    }else {
        console.log("dato invalido");
        input.className = "form-control is-invalid"
        return false;
    }
}