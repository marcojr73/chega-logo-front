function messageTranslation(message: string){
    console.log(message)
    if(message === "UserName already register on database") return "Nome de usuário já em uso"
    if(message === "User not found") return "Usuário não encontrado"
    if(message === "Your password is incorrect") return "Senha incorreta"
    if(message === "Place not found") return "Localidade não encontrada"
    if(message === "Created") return "Sucesso"
    if(message === "Truck already register on database") return "Placa de caminhão já cadastrada"
    if(message === "Truck not found") return "Caminhão não encontrado"
    if(message === "Token expired or invalid") return "Token expirado"
    if(message === "Token not send") return "Token não enviado"
    return message
}

export {
    messageTranslation
}