let valores = [1, 5, 9, 8, 4]
console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
*/

valores.sort()
/*
for(pos=0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}*/
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}
let buscar = valores.indexOf(0)
if (buscar == -1){
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor está na posição ${buscar}`)
}
