

//Função para realizar validação no FORM via ONSUBMIT

const validaForm = () =>{
    //const campos = document.querySelectorAll('input')
    const campo1 = document.getElementById('idTxtNm')
    const campo2 = document.getElementById('idTxtPass')

    //Realizando a validação nos campos Usuário e Senha.
    if(campo1.value == "" && campo2.value == ""){
        campo1.style.border = '2px solid #ff0000'
        campo2.style.border = '2px solid #ff0000'
        return false
    }else if(campo1.value == "" || campo2.value == ""){
        
        if(campo1.value == ""){
            campo1.style.border = '2px solid #ff0000' 
        }else{
            campo1.style.border = '2px solid #ff0000' 
        }

        return false 
        
    }else{
        return true
    }
}
