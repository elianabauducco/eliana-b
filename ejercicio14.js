
const min = 6
const max = 20
const div = 3
const result = Tdivisor(min, max, div)
console.log("Divisores de", div, "entre", min, "y", max, ":", result)

function Tdivisor(min, max, div) {
    let divisores = []
    for (let i = min; i <= max; i++) {
      if (i % div === 0) {
        divisores[divisores.length]=i
      }
    }
   return divisores 
}
  