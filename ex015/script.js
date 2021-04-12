function verificar(){
 var data = new Date()
 var ano = data.getFullYear()
 var fano = window.document.getElementById('txtano')
 var res = window.document.getElementById('res')
 if(fano.value.length == 0 || fano.value > ano){
     window.alert('[ERRO] Verifique os dados e tente novamente!')
 } else {
     var fsex = window.document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var genero = ''
     var img = window.document.createElement('img')
     img.setAttribute('id','foto')
     if (fsex[0].checked){
         genero = "homem" 
         document.body.style.background = 'blue'
         
         if(idade >=0 && idade<10 ){
          //criança
          img.setAttribute('src','bebeM.jpg')
         } else if(idade<21){
          //jovem
          img.setAttribute('src','jovemM.jpg')
         }else if(idade<50){
             //adulto
             img.setAttribute('src','adultoM.jpg')
         } else {
             //idoso
             img.setAttribute('src','idosoM.jpg')
         }
     } else if(fsex[1].checked){
         genero = "mulher"
         document.body.style.background = 'pink'
         if(idade >=0 && idade<10 ){
            //criança
            img.setAttribute('src','bebeF.jpg')
           } else if(idade<21){
            //jovem
            img.setAttribute('src','jovemF.jpg')
           }else if(idade<50){
               //adulto
               img.setAttribute('src','adultoF.jpg')
           } else {
               //idoso
               img.setAttribute('src','idosoF.jpg')
           }
     }
     res.style.textAlign = 'center'
     res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
     res.appendChild(img)
 }

}