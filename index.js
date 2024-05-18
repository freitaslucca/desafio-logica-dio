let xpHeroi = 10001;

if(xpHeroi <= 1000){
    console.log("Ferro")
}else if(xpHeroi >= 1000 && xpHeroi <= 2000){
    console.log("Bronze")
}else if(xpHeroi> 2000 && xpHeroi <= 5000){
    console.log("Prata Ouro")
}else if(xpHeroi> 5000 && xpHeroi <= 8000){
    console.log("Platina Dimante")
}else if(xpHeroi> 8000 && xpHeroi <= 9000){
    console.log("Ascendente")
}else if(xpHeroi> 9000 && xpHeroi <= 10000){
    console.log("Imortal")
}else if(xpHeroi>=10001){
    console.log("Radiante")
}else{
    console.log("Dado inválido")
}