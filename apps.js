
//Fiesta Electronica//*

alert("Bienvenido al party house")

for (let i=1; i<=2; i++){
    let nombre = prompt("ingrese su nombre")
    let años = Number(prompt("ingrese su edad"))

    if(años>=17 & años <=28 || años>29 & años<=60){
        alert(nombre + " Edad "+ años +" Numero de entrada: "+ i )
    
    }else if(años===29){
        alert("Ingresas Gratis Felicidades")
        alert(nombre + " Edad "+ años +" Numero de entrada: "+ i )
    }else{
        alert("No puedes ingresar")
    }
   
} 