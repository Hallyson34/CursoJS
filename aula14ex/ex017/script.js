function gerar(){
    var tn1 = window.document.getElementById('txtn1')
    var tab = window.document.getElementById('seltab')
    if(tn1.value.length == 0){
    window.alert("Por favor, digite um número! ")
} else {
    var n1 = Number(tn1.value)
    tab.innerHTML=' '
    for(var c=1;c<=10;c++){
  var item = document.createElement('option')
  item.text = `${n1} X ${c} = ${n1*c}`
  item.value = `tab${c}`
  tab.appendChild(item)
    }
}
}