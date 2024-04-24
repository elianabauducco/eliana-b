var num1 = 1
var num2 = 100
var divisores2
var divisores5
for (i=num1; i<num2; i++){
    if (i% 2 === 0){
        divisores2= divisores2+ `,` +  i
    }
}     
console.log("Los multiplos de 2 son: " +  divisores2) 
for (i=num1; i<num2; i++){
        if (i % 5 === 0){
        divisores5=divisores5+ `,` +  i 
    }
}
console.log("Los multiplos de 5 son: " + divisores5)