function messageTranslation(message: string){
    console.log(message)
    if(message === "This email already in use") return "Este email já esta sendo usado"
    if(message === "This cnpj already in use") return "Este CNPJ já esta sendo usado"
    if(message === "Not register business for this email") return "Nenhum negócio registrado com este email"
    if(message === "This password is incorrect") return "Senha incorreta"
    if(message === "Created") return "Sucesso"
    if(message === "Name is required") return "Nome é um campo obrigatório"
    if(message === "Units measurement invalid type") return "Unidade de medida inválida"
    if(message === "Code Already in use") return "Código já cadastrado"
    if(message === "Token not send") return "Token não enviado"
    if(message === "Token expired or invalid") return "Token expirado ou inválido"
    return message
}

export {
    messageTranslation
}