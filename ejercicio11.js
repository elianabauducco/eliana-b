//- Ingresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal

var p=['c','a','r','p','a']
let contadorL = {}
    for (var i = 0; i < p.length; i++) {
      var letra = p[i]
        if (contadorL[letra]) {
            contadorL[letra]++
        } 
        else 
            contadorL[letra] = 1
    }
    console.log("Letras de la palabra carpa y sus repeticiones:")
    for (var letra in contadorL) {
      console.log(letra + " = " + contadorL[letra])
    }