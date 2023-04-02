function compras(trabalho1, trabalho2){
    const comprarSorverte = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudadvel = !comprarSorverte // oparador unario

    return{ comprarSorverte, comprarTv50, comprarTv32, manterSaudadvel }
}

console.log(compras(true, true))