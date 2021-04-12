var num = document.getElementById('txtnum')
var tab = document.getElementById('selnum')
var res = document.querySelector('div#res')
var valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) !=-1 ){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        tab.appendChild(item)
        res.innerHTML=' '

    } else{
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ' '
    num.focus()
}

function analizar(){
    if(valores.length==0){
        window.alert("Adicione valores antes de analizar!")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
            for(let pos in valores){
                soma+=valores[pos]
                if(valores[pos]>maior)
                    maior=valores[pos]
                if(valores[pos]<menor)
                    menor=valores[pos]
            }
        media= soma / total    
        res.innerHTML=' '
        res.innerHTML+= `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML+= `<P>O maior valor adicionado foi: ${maior}</p>`
        res.innerHTML+=`<p>O menor valor adicionado foi: ${menor}</p>`
        res.innerHTML+=`<p>A soma dos valores adicionados é: ${soma}</p>`
        res.innerHTML+=`<p>A média dos valores digitados é: ${media}</p>`
    }
}
