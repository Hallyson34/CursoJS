let num =[5,8,2,9,3] 
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro termo é: ${num[0]}`)
for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
}