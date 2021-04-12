function gerar(){
var tn1 = document.getElementById('txtn1')
var tn2 = document.getElementById('txtn2')
var tn3 = document.getElementById('txtn3')
var res = document.getElementById('selres')
    if(tn1.value.length==0||tn2.value.length==0||tn3.value.length==0){
        window.alert('[ERRO] Preencha todos os campos para prosseguir!')
    }
    else{
        var n1 = Number(tn1.value)//Primeiro termo
        var n2 = Number(tn2.value)//Ultimo termo
        var n3 = Number(tn3.value)//Razao
        res.innerHTML=' '
        var t = 1
        if(n3==0){
            window.alert('O valor da Razão deve ser diferente de 0. Razão=1')
        n3=1     
        }
        if(n1<=n2){
        for(var c=n1;c*n3<=n2;c++){
           var item = document.createElement('option')
           item.text = `O ${t}º termo da PG é: ${c*n3}`
           item.value = `res${t}`
           res.appendChild(item)
          t++
        }
    }
        if(n1>n2){
            for(var c=n1;c/n3>=n2;c--){
                var item = document.createElement('option')
                item.text = `O ${t}º termo da PG é: ${c/n3}`
                item.value = `res${t}`
                res.appendChild(item)
                t++
            }
        }
        
    }
    
}