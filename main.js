function inputs() {
    const num1= parseFloat(prompt("Introduce el primer número"));
    const num2= parseFloat(prompt("Introduce el segundo número"));
    const num3= parseFloat(prompt("Introduce el tercer número"));
    return [num1, num2, num3];
}


function max(){
    [num1,num2, num3] = inputs();   
    let message = "";
    if((num1 > 100 || num1 < 0)||(num2 > 100 || num2 < 0)||(num3 > 100 || num3 < 0))
        alert("Alguno de los números se encuentran fuera del rango solictado")
    else{
        if(num1>=num2 && num1>=num3)
            message = `${num1} es el número mayor`;
        else if(num2>=num1 && num2>=num3)
            message = `${num2} es el número mayor`;
        else
            message = `${num3} es el número mayor`;
        alert(message);
    }
    
}
function min(){
    [num1,num2, num3] = inputs();
    let message = "";
    if((num1 > 100 || num1 < 0)||(num2 > 100 || num2 < 0)||(num3 > 100 || num3 < 0))
        alert("Alguno de los números se encuentran fuera del rango solictado")
    else{
        if(num1<=num2 && num1<=num3)
            message = `${num1} es el número menor`;
        else if(num2<=num1 && num2<=num3)
            message = `${num2} es el número menor`;
        else
            message = `${num3} es el número menor`;
        alert(message);
    }
    
}
function multiplo() {
    const num = parseInt(prompt("Introduce un entero entre el 100 y el 200"));
    let message = "";
    if(num>=100 || num<=200)
        message = "El número introducido no cumple con las caracteristicas especificadas";
    else{
        if(num%3 === 0)
            message = "Tu número es múltiplo de 3";
        else
            message = "Tu número no es múltiplo de 3";
    }
    
    alert(message);

}
function sumade(){
    [num1, num2, num3] = inputs();
    if (num1 === num2 + num3)
        message =  `El número ${num1} es la suma de los otros dos`;
    else if(num2 === num1 + num3)
        message = `El número ${num2} es la suma de los otros dos`;
    else if(num3 === num1+ num2)
        message = `El número ${num3} es la suma de los otros dos`;
    alert(message);
}
function isEven(){
    const num = prompt("Introduce un número para ver si es par o impar");
    let message = "";
    if (num%2 === 0)
        message = `${num} es par`;
    else if (num%2 === 1 || num%2 === -1)
        message = `${num} es impar`;
    else
        message = "No se brou, seguro pusiste un decimal o una palabra";
    alert(message)
}
function binarySearch(numerosDondeBuscar,numABuscar){
  let l=0;
  let r= numerosDondeBuscar.length -1;//6
  let mid;
  while(r >= 1){
    mid = l + Math.floor((r-l)/2);//3
    if(numerosDondeBuscar[mid]==numABuscar)//numerosDonde=6
      return mid;
  
    if(numerosDondeBuscar[mid] > numABuscar)
      r = mid - 1;
    else
      l = mid + 1;//4
  console.log(l,r,mid)
}
  return -1;
  
}
