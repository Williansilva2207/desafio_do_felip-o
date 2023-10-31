const nameHero = "Felipão"
let xpHero = "900"
let nivelHero = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"]

function mensagemDeSaida(xpHero){
    console.log("O Herói " + nameHero, "está no nível " + nivelHero[xpHero - 1])
}

if(xpHero <= 1000){
    xpHero = 1
    mensagemDeSaida(xpHero)
}
else if(xpHero > 1000 && xpHero <= 2000){
    xpHero = 2
    mensagemDeSaida(xpHero)
}
else if(xpHero > 2000 && xpHero <= 6000){
    xpHero = 3
    mensagemDeSaida(xpHero)
}
else if(xpHero > 6000 && xpHero <= 7000){
    xpHero = 4
    mensagemDeSaida(xpHero)
}
else if(xpHero > 7000 && xpHero <= 8000){
    xpHero = 5
    mensagemDeSaida(xpHero)
}
else if(xpHero > 8000 && xpHero <= 9000){
    xpHero = 6
    mensagemDeSaida(xpHero)
}
else if(xpHero > 9000 && xpHero <= 10000){
    xpHero = 7
    mensagemDeSaida(xpHero)
}
else{
    xpHero = 8
    mensagemDeSaida(xpHero)
}