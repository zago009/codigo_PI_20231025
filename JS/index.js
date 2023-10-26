function MostraHora(){
    
    let dataAtual = new Date ()
    let hora = dataAtual.getHours().toString().padStart(2,'0')
    let min = dataAtual.getMinutes().toString().padStart(2,'0')
    let segundos = dataAtual.getSeconds().toString().padStart(2,'0')

    let dia = dataAtual.getDay().toString().padStart(2,'0')
    let mes = dataAtual.getMonth().toString().padStart(2,'0')
    let ano = dataAtual.getFullYear().toString()
   

    console.log(hora, min,segundos)

    document.querySelector("#Relogio").innerHTML = ` ${dia} / ${mes} / ${ano}<br>
    ${hora} : ${min} : ${segundos}`;
}

MostraHora()

setInterval(
    MostraHora,
    1000
)