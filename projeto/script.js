//retornando a hora

let horas = new Date()
document.write(horas.getHours())
document.write("<br><br>")

//retornando os minutos
let minutos = new Date()
document.write(minutos.getMinutes())
document.write("<br><br>")

//retornando os segundos
let segundos = new Date()
document.write(segundos.getSeconds())
document.write("<br><br>")

//alterando data
let horas1 = new Date()
horas1.setHours(horas1.getHours()+3)
document.write(horas1.getHours());
document.write("<br><br>")

//alterando minutos
let minutos1 = new Date()
minutos1.setHours(minutos1.getMinutes()+3)
document.write(minutos1.getMinutes());
document.write("<br><br>")

//usando o setTimeout

function BemVindo(){
    alert("Seja bem vindo")
}

setTimeout(BemVindo,1000)