let list = [
    { nomb: "Marcelo", sexo: "masculino", edad: 60 },
    { nomb: "Roberto", sexo: "masculino", edad: 25 },
    { nomb: "Paula", sexo: "femenino", edad: 14 },
    { nomb: "Andres", sexo: "masculino", edad: 37 },
    { nomb: "Clara", sexo: "femenino", edad: 50 },
]

let sumaE = 0;
    for (let i = 0; i < list.length; i++) {
        sumaE += list[i].edad;
    }

let promE = sumaE / list.length

let mujeres = list.filter(persona => persona.sexo === "femenino")
mujeres.sort((a, b) => b.edad - a.edad);

let mujM = mujeres[0].nomb;

let hombres = list.filter(persona => persona.sexo === "masculino")
hombres.sort((a, b) => a.edad - b.edad)

let hombMen = hombres[0].nomb

let edadMuj = mujeres.map(mujer => mujer.edad);
let sumEdadMuj = edadMuj.reduce((a, b) => a + b, 0)

let promEMuj = sumEdadMuj / edadMuj.length

console.log("Promedio de edad total:", promE)
console.log("Nombre de la mujer con mayor edad:", mujM)
console.log("Nombre del hombre con menor edad:", hombMen)
console.log("Promedio de edad de las mujeres:", promEMuj)