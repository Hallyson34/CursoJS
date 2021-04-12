function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora>0 && hora<13){
    //Bom dia!
    img.src = 'fotomanha.png'
    document.body.style.background = 'white'
} else if (hora<18) {
  //Boa Tarde!
  document.body.style.background = 'orange'
  img.src = 'fototarde.png'
} else{
  //Boa Noite!  
  document.body.style.background = 'darkblue'
  img.src = 'fotonoite.png'
}
}
