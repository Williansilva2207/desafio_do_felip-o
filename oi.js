const nameHero = "Felipão"
let xpHero = 900
let xpAcumulador = xpHero
let nivelHero = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"]

function mensagemDeSaida(xpHero){
    console.log("O Herói " + nameHero, "está no nível " + nivelHero[xpHero - 1])
}
while(xpAcumulador < 10002 ){
    if(xpAcumulador <= 1000){
        xpHero = 1
        mensagemDeSaida(xpHero)
    }
    else if(xpAcumulador > 1000 && xpAcumulador <= 2000){
        xpHero = 2
        mensagemDeSaida(xpHero)
    }
    else if(xpAcumulador > 2000 && xpAcumulador <= 6000){
        xpHero = 3
        mensagemDeSaida(xpHero)
    }
    else if(xpAcumulador > 6000 && xpAcumulador <= 7000){
        xpHero = 4
        mensagemDeSaida(xpHero)
    }
    else if(xpAcumulador > 7000 && xpAcumulador <= 8000){
        xpHero = 5
        mensagemDeSaida(xpHero)
    }
    else if(xpAcumulador > 8000 && xpAcumulador <= 9000){
        xpHero = 6
        mensagemDeSaida(xpHero)
    }
    else if(xpAcumulador > 9000 && xpAcumulador<= 10000){
        xpHero = 7
        mensagemDeSaida(xpHero)
    }
    else{
        xpHero = 8
        mensagemDeSaida(xpHero)
    }
    xpAcumulador += 1000
}
