// promesas

let x = 10

const promesa = new Promise((resolve, reject) => {
  if (x === 10) {
    resolve('x es igual a 10')
  } else {
    reject('x no es igual a 10')
  }
})

console.log(promesa)

promesa
.then((response) => {
    console.log(response)
})
.catch((error) => {
    console.log(error)
})
