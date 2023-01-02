const value = process.argv[2]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  const numeroAleatorioEntreUmeTres = getRndInteger(1,3)

  const tesoura = 1
  const papel = 2
  const pedra = 3 

  if(value === "tesoura" && numeroAleatorioEntreUmeTres === 1){
    console.log("Empatou")
  } else if(value === "tesoura" && numeroAleatorioEntreUmeTres === 2){
    console.log("Você escolheu tesoura e o computador escolheu papel. Você ganhou!")
  } else if(value === "tesoura" && numeroAleatorioEntreUmeTres === 3){
    console.log("Você escolheu tesoura e o computador escolheu pedra. Você perdeu!")
  }

  if(value === "papel" && numeroAleatorioEntreUmeTres === 2){
    console.log("Empatou")
  } else if(value === "papel" && numeroAleatorioEntreUmeTres === 3){
    console.log("Você escolheu papel e o computador escolheu pedra. Você ganhou!")
  } else if(value === "papel" && numeroAleatorioEntreUmeTres === 1){
    console.log("Você escolheu papel e o computador escolheu tesoura. Você perdeu!")
  }

  if(value === "pedra" && numeroAleatorioEntreUmeTres === 3){
    console.log("Empatou")
  } else if(value === "pedra" && numeroAleatorioEntreUmeTres === 1){
    console.log("Você escolheu pedra e o computador escolheu tesoura. Você ganhou!")
  } else if(value === "pedra" && numeroAleatorioEntreUmeTres === 2){
    console.log("Você escolheu pedra e o computador escolheu papel. Você perdeu!")
  }
