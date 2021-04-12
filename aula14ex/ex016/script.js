function contar(){
    var tni = window.document.getElementById('txtni')
    var tnf = window.document.getElementById('txtnf')
    var tnp = window.document.getElementById('txtnp')
    var ni = Number(tni.value)
    var nf = Number(tnf.value)
    var np = Number(tnp.value)
  if(ni == 0 || nf == 0 ) {
     res.innerHTML = 'Impossível contar. ' 
  } else{  
    res.innerHTML='Contando: <br>'
    if(np<=0){
     window.alert('[ERRO] Valor invalido para PASSO!.Considerando Passo=1')
     np=1
    }
    //ordem crescente
    if(ni<= nf){
      for(var c=ni;c<=nf;c+=np){
          res.innerHTML +=`${c}\u{1F449} `
      }
      //ordem decrescente
  } if(ni>nf){
      for(var c=ni;c>=nf;c-=np){
         res.innerHTML += `${c}\u{1F449} `
      }
    }
    res.innerHTML+= `\u{1F3C1}`
  }
}