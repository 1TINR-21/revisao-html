
var y = 20

//Criando o contexto do Canvas
const cv = document.getElementById('tutorial')
let ctx  = cv.getContext('2d')

//Redesenhando o Canvas para um Retângulo
ctx.fillStyle = 'rgb(121,110,5)'
//ctx.fillRect(x,y,w,h)
ctx.fillRect(10,parseInt(y),50,25)

//ctx.arc(50, 50, 10, 0 ,2 * Math.PI)
//ctx.fill()

//Criando funções governantes do contexto
const btYC = document.getElementById('btYCima')
const btYB = document.getElementById('btYBaixo')
const btXE = document.getElementById('btXEsq')
const btXD = document.getElementById('btXDir')



